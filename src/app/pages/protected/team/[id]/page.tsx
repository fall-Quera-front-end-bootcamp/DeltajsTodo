'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import TextArea from "@/components/ui/TextArea";
import { teamService } from "@/services/team";
import { useRealtime } from "@/hooks/useRealtime";
import type { TeamMessage } from "@/types/api";

export default function TeamChatPage() {
  const params = useParams<{ id: string }>();
  const teamId = params?.id;
  const queryClient = useQueryClient();
  const [body, setBody] = useState("");

  const teamQuery = useQuery({
    queryKey: ["team", teamId],
    queryFn: () => teamService.get(teamId as string),
    enabled: !!teamId,
  });

  const messagesQuery = useQuery({
    queryKey: ["team", teamId, "messages"],
    queryFn: () => teamService.messages(teamId as string),
    enabled: !!teamId,
  });

  const sendMessage = useMutation({
    mutationFn: () => teamService.sendMessage(teamId as string, body),
    onSuccess: (msg) => {
      setBody("");
      queryClient.setQueryData<TeamMessage[]>(["team", teamId, "messages"], (prev = []) => [
        ...prev,
        msg,
      ]);
    },
  });

  useRealtime(teamId, (evt) => {
    const payload = evt.payload as Partial<TeamMessage> | undefined;
    if (evt.type === "team:message" && payload?.teamId === teamId && payload?.body) {
      queryClient.setQueryData<TeamMessage[]>(["team", teamId, "messages"], (prev = []) => [
        ...prev,
        payload as TeamMessage,
      ]);
    }
  });

  useEffect(() => {
    if (!teamId) return;
    queryClient.invalidateQueries({ queryKey: ["team", teamId, "messages"] });
  }, [teamId, queryClient]);

  if (!teamId) return <div className="text-slate-400">شناسه تیم وجود ندارد.</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-amber-200">چت تیمی</p>
          <h1 className="text-3xl font-semibold text-slate-50">{teamQuery.data?.name ?? "تیم"}</h1>
          <p className="text-sm text-slate-400">
            پیام‌های زنده از `/api/team/:id/messages` و `/api/events/stream?teamId=...`.
          </p>
        </div>
        <Button variant="secondary" onClick={() => window.history.back()}>
          بازگشت
        </Button>
      </div>

      <Card title="پیام‌ها">
        {messagesQuery.isLoading && <p className="text-slate-500">در حال بارگذاری پیام‌ها…</p>}
        <div className="flex flex-col gap-3">
          <div className="max-h-[320px] space-y-2 overflow-y-auto rounded-lg border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-2">
            {messagesQuery.data?.map((msg) => (
              <div key={msg.id} className="rounded-lg bg-black/20 px-3 py-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-50">
                    {msg.user?.name ?? msg.userId}
                  </p>
                  <span className="text-[11px] text-slate-500">
                    {new Date(msg.createdAt).toLocaleTimeString("fa-IR")}
                  </span>
                </div>
                <p className="text-sm text-slate-200">{msg.body}</p>
              </div>
            ))}
            {!messagesQuery.isLoading && messagesQuery.data?.length === 0 && (
              <p className="text-slate-500">پیامی ثبت نشده.</p>
            )}
          </div>

          <TextArea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="برای تیم به‌روزرسانی بفرستید…"
          />
          <div className="flex justify-end">
            <Button disabled={!body || sendMessage.isPending} onClick={() => sendMessage.mutate()}>
              ارسال
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
