'use client';

import { useState } from "react";
import Link from "next/link";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import { projectsService } from "@/services/projects";

export default function ProjectsPage() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#2563EB");
  const queryClient = useQueryClient();

  const projectsQuery = useQuery({
    queryKey: ["projects"],
    queryFn: projectsService.list,
  });

  const createProject = useMutation({
    mutationFn: () => projectsService.create({ name, color }),
    onSuccess: () => {
      setName("");
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });

  const deleteProject = useMutation({
    mutationFn: (id: string) => projectsService.remove(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["projects"] }),
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-amber-200">پروژه‌ها</p>
          <h1 className="text-3xl font-semibold text-slate-50">پروژه‌ها و تیم‌ها</h1>
          <p className="text-sm text-slate-400">
            `GET/POST/DELETE /api/project`. اتصال به تیم و برنامه‌ریز.
          </p>
        </div>
        <Button onClick={() => queryClient.invalidateQueries({ queryKey: ["projects"] })}>
          به‌روزرسانی
        </Button>
      </div>

      <Card title="ایجاد پروژه">
        <div className="grid gap-3 sm:grid-cols-[1fr,140px,120px] sm:items-end">
          <Input
            label="نام"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="بازطراحی وب‌سایت"
          />
          <Input
            label="رنگ"
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <Button disabled={!name} onClick={() => createProject.mutate()}>
            ایجاد
          </Button>
        </div>
      </Card>

      <Card title="پروژه‌ها">
        {projectsQuery.isLoading && <p className="text-slate-500">در حال بارگذاری پروژه‌ها…</p>}
        {!projectsQuery.isLoading && projectsQuery.data?.length === 0 && (
          <p className="text-slate-500">پروژه‌ای ثبت نشده.</p>
        )}

        <div className="grid gap-3 md:grid-cols-2">
          {projectsQuery.data?.map((project) => (
            <div
              key={project.id}
              className="flex flex-col gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] p-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full" style={{ background: project.color }} />
                  <p className="text-lg font-semibold text-slate-50">{project.name}</p>
                </div>
                <div className="flex gap-2">
                  <Link href={`/projects/${project.id}`}>
                    <Button variant="secondary">مشاهده</Button>
                  </Link>
                  <Button
                    variant="ghost"
                    onClick={() => deleteProject.mutate(project.id)}
                    className="text-xs"
                  >
                    حذف
                  </Button>
                </div>
              </div>
              <p className="text-xs text-slate-500">
                {project.description ?? "کارها و تیم‌ها را به این پروژه متصل کنید."}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
