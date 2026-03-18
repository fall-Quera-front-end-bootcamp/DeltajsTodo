'use client';

import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import { pomodoroService } from "@/services/pomodoro";

export default function PomodoroPage() {
  const queryClient = useQueryClient();
  const [note, setNote] = useState("");
  const [duration, setDuration] = useState(25);

  const historyQuery = useQuery({
    queryKey: ["pomodoro", "history"],
    queryFn: pomodoroService.history,
  });

  const start = useMutation({
    mutationFn: () => pomodoroService.start({ note, durationMinutes: duration }),
    onSuccess: () => {
      setNote("");
      queryClient.invalidateQueries({ queryKey: ["pomodoro"] });
    },
  });

  const stop = useMutation({
    mutationFn: () => pomodoroService.stop(),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["pomodoro"] }),
  });

  const active = historyQuery.data?.find((p) => p.status === "active");

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-amber-200">پومودورو</p>
        <h1 className="text-3xl font-semibold text-slate-50">جلسات تمرکز</h1>
        <p className="text-sm text-slate-400">
          `POST /api/pomodoro/start`، `POST /api/pomodoro/stop`، `GET /api/pomodoro/history`.
        </p>
      </div>

      <Card title="شروع جلسه" description="در بک‌اند ذخیره می‌شود تا وضعیت فعال در داشبورد دیده شود.">
        <div className="grid gap-3 sm:grid-cols-3 sm:items-end">
          <Input
            label="مدت (دقیقه)"
            type="number"
            min={10}
            max={60}
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
          />
          <Input
            label="یادداشت (اختیاری)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="روی چه چیزی تمرکز می‌کنید؟"
          />
          <div className="flex gap-2">
            <Button className="flex-1" disabled={start.isPending} onClick={() => start.mutate()}>
              شروع
            </Button>
            <Button
              className="flex-1"
              variant="secondary"
              disabled={!active || stop.isPending}
              onClick={() => stop.mutate()}
            >
              توقف
            </Button>
          </div>
        </div>
        {active && (
          <p className="mt-3 text-sm text-amber-100">
            فعال: شروع در {new Date(active.startedAt).toLocaleTimeString("fa-IR")}
          </p>
        )}
      </Card>

      <Card title="نشست‌های اخیر">
        {historyQuery.isLoading && <p className="text-slate-500">در حال بارگذاری تاریخچه…</p>}
        {!historyQuery.isLoading && historyQuery.data?.length === 0 && (
          <p className="text-slate-500">هنوز نشستی ثبت نشده.</p>
        )}
        <ul className="space-y-2">
          {historyQuery.data?.map((session) => (
            <li
              key={session.id}
              className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-2"
            >
              <div>
                <p className="text-sm font-semibold text-slate-50">
                  {session.status} • {Math.round(session.durationMs / 60000)} دقیقه
                </p>
                <p className="text-xs text-slate-500">
                  {new Date(session.startedAt).toLocaleString("fa-IR")}
                  {session.endedAt ? ` → ${new Date(session.endedAt).toLocaleTimeString("fa-IR")}` : ""}
                </p>
              </div>
              {session.note && <span className="text-xs text-slate-400">{session.note}</span>}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
