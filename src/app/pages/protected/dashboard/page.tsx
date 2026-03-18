'use client';

import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { timerService } from "@/services/timers";
import { plannerService } from "@/services/planner";
import { pomodoroService } from "@/services/pomodoro";
import { teamService } from "@/services/team";
import { Link } from "react-router-dom";

export default function DashboardPage() {
  const { data: timers = [], isLoading: timersLoading } = useQuery({
    queryKey: ["timers"],
    queryFn: timerService.list,
  });

  const { data: tasks = [], isLoading: tasksLoading } = useQuery({
    queryKey: ["planner", "today"],
    queryFn: () => plannerService.list("today"),
  });

  const { data: pomodoro = [], isLoading: pomoLoading } = useQuery({
    queryKey: ["pomodoro", "history"],
    queryFn: pomodoroService.history,
  });

  const { data: recentMessages = [] } = useQuery({
    queryKey: ["team", "recent-messages"],
    queryFn: async () => {
      const teams = await teamService.list();
      if (!teams.length) return [];
      return teamService.messages(teams[0].id);
    },
  });

  const activePomodoro = useMemo(
    () => pomodoro.find((p) => p.status === "active"),
    [pomodoro],
  );

  const cards = [
    {
      title: "تایمرهای امروز",
      value: timers.length,
      loading: timersLoading,
      href: "/timers",
    },
    {
      title: "کارهای مهلت‌دار",
      value: tasks.filter((t) => t.status !== "done").length,
      loading: tasksLoading,
      href: "/planner",
    },
    {
      title: "پومودورو فعال",
      value: activePomodoro ? "در حال اجرا" : "غیرفعال",
      loading: pomoLoading,
      href: "/pomodoro",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-amber-200">نمای کلی</p>
          <h1 className="text-3xl font-semibold text-slate-50">داشبورد</h1>
          <p className="text-sm text-slate-400">
            داده‌ها از `/api/time`، `/api/planner`، `/api/pomodoro` و `/api/team` خوانده می‌شود.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" onClick={() => window.location.reload()}>
            به‌روزرسانی
          </Button>
          <Link to="/projects">
            <Button>پروژه جدید</Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <Card key={card.title} title={card.title} description={card.href}>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-slate-50">
                {card.loading ? "…" : card.value}
              </span>
              <Link to={card.href} className="text-xs text-amber-200 underline-offset-2 hover:underline">
                بازکردن
              </Link>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card title="کارهای امروز" description="از /api/planner/tasks?view=today">
          {tasksLoading && <p className="text-slate-500">در حال بارگذاری کارها…</p>}
          {!tasksLoading && tasks.length === 0 && (
            <p className="text-slate-500">کاری برای امروز نیست. از برنامه‌ریز اضافه کنید.</p>
          )}
          <ul className="space-y-2">
            {tasks.slice(0, 5).map((task) => (
              <li
                key={task.id}
                className="flex items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-2"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-50">{task.title}</p>
                  <p className="text-xs text-slate-500">{task.status}</p>
                </div>
                {task.dueDate && (
                  <span className="rounded-full bg-amber-500/10 px-3 py-1 text-[11px] text-amber-100">
                    سررسید {new Date(task.dueDate).toLocaleDateString("fa-IR")}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Card>

        <Card title="پومودورو" description="آخرین نشست‌ها">
          {pomoLoading && <p className="text-slate-500">در حال بارگذاری تاریخچه…</p>}
          {!pomoLoading && pomodoro.length === 0 && (
            <p className="text-slate-500">نشستی ثبت نشده. از صفحه پومودورو شروع کنید.</p>
          )}
          <ul className="space-y-2">
            {pomodoro.slice(0, 5).map((session) => (
              <li
                key={session.id}
                className="flex items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-2"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-50">{session.status}</p>
                  <p className="text-xs text-slate-500">
                    {new Date(session.startedAt).toLocaleTimeString("fa-IR")} •{" "}
                    {Math.round(session.durationMs / 60000)} دقیقه
                  </p>
                </div>
                {session.note && <span className="text-xs text-slate-400">{session.note}</span>}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card title="پیام‌های اخیر تیم" description="استریم SSE از /api/events/stream">
        {recentMessages.length === 0 && (
          <p className="text-slate-500">
            هنوز پیامی بارگذاری نشده. یک تیم را باز کنید تا پیام‌های زنده دریافت شوند.
          </p>
        )}
        <ul className="space-y-2">
          {recentMessages.slice(0, 5).map((msg) => (
            <li
              key={msg.id}
              className="flex items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-2"
            >
              <div>
                <p className="text-sm font-semibold text-slate-50">{msg.user?.name ?? msg.userId}</p>
                <p className="text-xs text-slate-400">{msg.body}</p>
              </div>
              <span className="text-[11px] text-slate-500">
                {new Date(msg.createdAt).toLocaleTimeString("fa-IR")}
              </span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
