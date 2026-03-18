'use client';

import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import { timerService } from "@/services/timers";

export default function TimersPage() {
  const [label, setLabel] = useState("");
  const queryClient = useQueryClient();

  const timersQuery = useQuery({
    queryKey: ["timers"],
    queryFn: timerService.list,
  });

  const createTimer = useMutation({
    mutationFn: () => timerService.create({ label }),
    onSuccess: () => {
      setLabel("");
      queryClient.invalidateQueries({ queryKey: ["timers"] });
    },
  });

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-amber-200">تایمرها</p>
        <h1 className="text-3xl font-semibold text-slate-50">تایمر دستی و لپ‌ها</h1>
        <p className="text-sm text-slate-400">
          از `/api/timer` (GET/POST) استفاده می‌کند. ذخیره خودکار کرنومتر از طریق AuthProvider برقرار است.
        </p>
      </div>

      <Card title="ایجاد تایمر">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Input
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            placeholder="طراحی، تماس بک‌اند…"
          />
          <Button
            disabled={!label || createTimer.isPending}
            onClick={() => createTimer.mutate()}
            className="sm:w-32"
          >
            ذخیره
          </Button>
        </div>
      </Card>

      <Card title="تایمرهای ذخیره شده">
        {timersQuery.isLoading && <p className="text-slate-500">در حال بارگذاری تایمرها…</p>}
        {!timersQuery.isLoading && timersQuery.data?.length === 0 && (
          <p className="text-slate-500">تایمری ثبت نشده.</p>
        )}
        <ul className="space-y-2">
          {timersQuery.data?.map((timer) => (
            <li
              key={timer.id}
              className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-2"
            >
              <div>
                <p className="text-sm font-semibold text-slate-50">{timer.label || "Untitled"}</p>
                <p className="text-xs text-slate-500">
                  {Math.round(timer.elapsedMs / 1000)} ثانیه • {timer.laps?.length ?? 0} لپ
                </p>
              </div>
              <span className="text-[11px] text-slate-500">
                {timer.updatedAt ? new Date(timer.updatedAt).toLocaleTimeString("fa-IR") : ""}
              </span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
