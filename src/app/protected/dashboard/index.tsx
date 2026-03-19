import { useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { timerService } from '@/services/timers'
import { plannerService } from '@/services/planner'
import { pomodoroService } from '@/services/pomodoro'
import { teamService } from '@/services/team'
import { Link } from 'react-router-dom'

export default function DashboardPage() {
  const { data: timers = [], isLoading: timersLoading } = useQuery({
    queryKey: ['timers'],
    queryFn: timerService.list
  })

  const { data: tasks = [], isLoading: tasksLoading } = useQuery({
    queryKey: ['planner', 'today'],
    queryFn: () => plannerService.list('today')
  })

  const { data: pomodoro = [], isLoading: pomoLoading } = useQuery({
    queryKey: ['pomodoro', 'history'],
    queryFn: pomodoroService.history
  })

  const { data: recentMessages = [] } = useQuery({
    queryKey: ['team', 'recent-messages'],
    queryFn: async () => {
      const teams = await teamService.list()
      if (!teams.length) return []
      return teamService.messages(teams[0].id)
    }
  })

  const activePomodoro = useMemo(
    () => pomodoro.find((p) => p.status === 'active'),
    [pomodoro]
  )

  const openTasks = tasks.filter((t) => t.status !== 'done')
  const completedToday = tasks.filter((t) => t.status === 'done')

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs tracking-[0.25em] text-amber-300 uppercase">
            Mission Control
          </p>
          <h1 className="text-3xl font-semibold text-slate-50">
            داشبورد زندگی
          </h1>
          <p className="text-sm text-slate-400">
            زمانت را مدیریت کن، تمرکزت را حفظ کن، و پیشرفتت را ببین.
          </p>
        </div>

        <div className="flex gap-2">
          <Button variant="secondary" onClick={() => window.location.reload()}>
            بروزرسانی
          </Button>

          <Link to="/app/dashboard/planner">
            <Button>کار جدید</Button>
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card title="کارهای باز">
          <p className="text-3xl font-bold text-slate-50">
            {tasksLoading ? '…' : openTasks.length}
          </p>
        </Card>

        <Card title="انجام شده امروز">
          <p className="text-3xl font-bold text-emerald-400">
            {completedToday.length}
          </p>
        </Card>

        <Card title="تایمرها">
          <p className="text-3xl font-bold text-slate-50">
            {timersLoading ? '…' : timers.length}
          </p>
        </Card>

        <Card title="تمرکز فعال">
          <p className="text-lg font-semibold text-amber-300">
            {pomoLoading ? '...' : activePomodoro ? 'در حال تمرکز' : 'غیرفعال'}
          </p>
        </Card>
      </div>

      {/* Focus + Tasks */}
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Focus Card */}
        <Card title="مرکز تمرکز" description="مدیریت جلسات پومودورو">
          {activePomodoro ? (
            <div className="space-y-3">
              <p className="text-amber-300 font-semibold">جلسه در حال اجرا</p>

              <p className="text-sm text-slate-400">
                شروع:{' '}
                {new Date(activePomodoro.startedAt).toLocaleTimeString('fa-IR')}
              </p>

              <Link to="/app/dashboard/pomodoro">
                <Button>باز کردن پومودورو</Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-slate-400 text-sm">
                هنوز جلسه تمرکزی شروع نشده.
              </p>

              <Link to="/app/dashboard/pomodoro">
                <Button>شروع تمرکز</Button>
              </Link>
            </div>
          )}
        </Card>

        {/* Today Tasks */}
        <Card title="کارهای امروز">
          {tasksLoading && <p className="text-slate-500">در حال بارگذاری…</p>}

          {!tasksLoading && tasks.length === 0 && (
            <p className="text-slate-500">کاری برای امروز ثبت نشده.</p>
          )}

          <ul className="space-y-2">
            {tasks.slice(0, 6).map((task) => (
              <li
                key={task.id}
                className="flex items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-2"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-50">
                    {task.title}
                  </p>
                  <p className="text-xs text-slate-500">{task.status}</p>
                </div>

                {task.dueDate && (
                  <span className="text-xs text-amber-200">
                    {new Date(task.dueDate).toLocaleDateString('fa-IR')}
                  </span>
                )}
              </li>
            ))}
          </ul>

          <div className="pt-3">
            <Link to="/app/dashboard/planner">
              <Button variant="secondary">مشاهده برنامه‌ریز</Button>
            </Link>
          </div>
        </Card>
      </div>

      {/* Pomodoro History */}
      <Card title="نشست‌های تمرکز اخیر">
        {pomodoro.length === 0 && (
          <p className="text-slate-500">هنوز جلسه‌ای ثبت نشده.</p>
        )}

        <ul className="space-y-2">
          {pomodoro.slice(0, 5).map((session) => (
            <li
              key={session.id}
              className="flex items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-2"
            >
              <div>
                <p className="text-sm text-slate-50">{session.status}</p>

                <p className="text-xs text-slate-400">
                  {Math.round(session.durationMs / 60000)} دقیقه
                </p>
              </div>

              <span className="text-xs text-slate-500">
                {new Date(session.startedAt).toLocaleTimeString('fa-IR')}
              </span>
            </li>
          ))}
        </ul>
      </Card>

      {/* Team Activity */}
      <Card title="فعالیت تیم">
        {recentMessages.length === 0 && (
          <p className="text-slate-500">هنوز پیامی وجود ندارد.</p>
        )}

        <ul className="space-y-2">
          {recentMessages.slice(0, 5).map((msg) => (
            <li
              key={msg.id}
              className="flex justify-between rounded-lg border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-2"
            >
              <div>
                <p className="text-sm text-slate-50">
                  {msg.user?.name ?? msg.userId}
                </p>

                <p className="text-xs text-slate-400">{msg.body}</p>
              </div>

              <span className="text-xs text-slate-500">
                {new Date(msg.createdAt).toLocaleTimeString('fa-IR')}
              </span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}
