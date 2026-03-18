'use client';

import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import { plannerService, type PlannerView } from "@/services/planner";

export default function PlannerPage() {
  const [title, setTitle] = useState("");
  const [view, setView] = useState<PlannerView>("today");
  const queryClient = useQueryClient();

  const tasksQuery = useQuery({
    queryKey: ["planner", view],
    queryFn: () => plannerService.list(view),
  });

  const createTask = useMutation({
    mutationFn: () => plannerService.create({ title }),
    onSuccess: () => {
      setTitle("");
      queryClient.invalidateQueries({ queryKey: ["planner"] });
    },
  });

  const updateStatus = useMutation({
    mutationFn: ({ id, status }: { id: string; status: "done" | "archived" }) =>
      plannerService.update(id, { status }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["planner"] }),
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-amber-200">برنامه‌ریز</p>
          <h1 className="text-3xl font-semibold text-slate-50">کارهای روزانه و هفتگی</h1>
          <p className="text-sm text-slate-400">
            متصل به `/api/planner/tasks` (GET/POST/PATCH). بین نمای امروز و هفته جابجا شوید.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant={view === "today" ? "primary" : "secondary"} onClick={() => setView("today")}>
            امروز
          </Button>
          <Button variant={view === "week" ? "primary" : "secondary"} onClick={() => setView("week")}>
            هفته
          </Button>
        </div>
      </div>

      <Card title="افزودن سریع کار">
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="flex-1">
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="نوشتن مستند API، رفع باگ تایمر..."
            />
          </div>
          <Button
            disabled={!title || createTask.isPending}
            onClick={() => createTask.mutate()}
            className="sm:w-36"
          >
            اضافه
          </Button>
        </div>
      </Card>

      <Card title="کارها">
        {tasksQuery.isLoading && <p className="text-slate-500">در حال بارگذاری کارها…</p>}
        {!tasksQuery.isLoading && tasksQuery.data?.length === 0 && (
          <p className="text-slate-500">کاری ثبت نشده. از بالا اضافه کنید.</p>
        )}
        <ul className="space-y-2">
          {tasksQuery.data?.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-2"
            >
              <div>
                <p className="text-sm font-semibold text-slate-50">{task.title}</p>
                <p className="text-xs text-slate-500">
                  {task.status}{" "}
                  {task.dueDate ? `• ${new Date(task.dueDate).toLocaleDateString("fa-IR")}` : ""}
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="secondary"
                  className="text-xs"
                  onClick={() => updateStatus.mutate({ id: task.id, status: "done" })}
                >
                  انجام شد
                </Button>
                <Button
                  variant="ghost"
                  className="text-xs"
                  onClick={() => updateStatus.mutate({ id: task.id, status: "archived" })}
                >
                  بایگانی
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
