'use client';

import { useMemo } from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { projectsService } from "@/services/projects";
import { plannerService } from "@/services/planner";

export default function ProjectDetailPage() {
  const params = useParams<{ id: string }>();
  const projectId = params?.id;

  const projectQuery = useQuery({
    queryKey: ["project", projectId],
    queryFn: () => projectsService.get(projectId as string),
    enabled: !!projectId,
  });

  const tasksQuery = useQuery({
    queryKey: ["planner", "project", projectId],
    queryFn: () => plannerService.list("all"),
    enabled: !!projectId,
  });

  const tasks = useMemo(
    () => tasksQuery.data?.filter((t) => t.projectId === projectId) ?? [],
    [tasksQuery.data, projectId],
  );

  if (!projectId) {
    return <div className="text-slate-400">شناسه پروژه وجود ندارد.</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-amber-200">پروژه</p>
          <h1 className="text-3xl font-semibold text-slate-50">
            {projectQuery.data?.name ?? "در حال بارگذاری…"}
          </h1>
          <p className="text-sm text-slate-400">
            کارهای برنامه‌ریز، تیم‌ها و تایمرهای مرتبط با این پروژه را اینجا ببینید.
          </p>
        </div>
        <Button variant="secondary" onClick={() => window.history.back()}>
          بازگشت
        </Button>
      </div>

      <Card title="اطلاعات">
        {projectQuery.isLoading && <p className="text-slate-500">در حال بارگذاری پروژه…</p>}
        {projectQuery.data && (
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="h-3 w-3 rounded-full"
              style={{ background: projectQuery.data.color ?? "#facc15" }}
            />
            <p className="text-sm text-slate-300">شناسه: {projectQuery.data.id}</p>
            {projectQuery.data.teamId && (
              <p className="text-sm text-slate-300">تیم: {projectQuery.data.teamId}</p>
            )}
          </div>
        )}
      </Card>

      <Card title="کارها" description="از /api/planner/tasks">
        {tasksQuery.isLoading && <p className="text-slate-500">در حال بارگذاری کارها…</p>}
        {!tasksQuery.isLoading && tasks.length === 0 && (
          <p className="text-slate-500">فعلاً کاری به این پروژه متصل نیست.</p>
        )}
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-2"
            >
              <div>
                <p className="text-sm font-semibold text-slate-50">{task.title}</p>
                <p className="text-xs text-slate-500">{task.status}</p>
              </div>
              {task.dueDate && (
                <span className="text-[11px] text-slate-500">
                  {new Date(task.dueDate).toLocaleDateString("fa-IR")}
                </span>
              )}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
