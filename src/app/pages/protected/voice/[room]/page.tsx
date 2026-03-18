'use client';

import { useMemo } from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { voiceService } from "@/services/voice";

export default function VoiceRoomPage() {
  const params = useParams<{ room: string }>();
  const roomId = params?.room;

  const iceQuery = useQuery({
    queryKey: ["voice", "ice"],
    queryFn: voiceService.iceServers,
  });

  const socketUrl = useMemo(() => voiceService.socketUrl(roomId), [roomId]);

  if (!roomId) return <div className="text-slate-400">شناسه اتاق وجود ندارد.</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-amber-200">صوت</p>
          <h1 className="text-3xl font-semibold text-slate-50">ورود به اتاق</h1>
          <p className="text-sm text-slate-400">
            به سیگنالینگ WebRTC در {socketUrl} متصل شوید. سرورهای ICE از `/api/voice/ice` دریافت می‌شوند.
          </p>
        </div>
        <Button variant="secondary" onClick={() => window.history.back()}>
          بازگشت
        </Button>
      </div>

      <Card title="سیگنالینگ">
        <p className="text-sm text-slate-300">
          آدرس وب‌سوکت: <span className="font-mono">{socketUrl}</span>
        </p>
        <p className="text-xs text-slate-500">
          از `simple-peer` یا API وب‌آرتی‌سی استفاده کنید؛ پیام ورود باید شامل `roomId` باشد.
        </p>
      </Card>

      <Card title="سرورهای ICE">
        {iceQuery.isLoading && <p className="text-slate-500">در حال بارگذاری سرورهای ICE…</p>}
        <ul className="space-y-2">
          {iceQuery.data?.map((server, idx) => (
            <li
              key={idx}
              className="rounded-lg border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-2 text-sm text-slate-200"
            >
              {Array.isArray(server.urls) ? server.urls.join(", ") : server.urls}
              {server.username && (
                <span className="ml-2 text-xs text-slate-500">({server.username})</span>
              )}
            </li>
          ))}
        </ul>
        {iceQuery.data?.length === 0 && !iceQuery.isLoading && (
          <p className="text-slate-500">هیچ سرور ICE برنگشت.</p>
        )}
      </Card>
    </div>
  );
}
