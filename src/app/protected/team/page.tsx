'use client';

import { useState } from "react";
import Link from "next/link";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import { teamService } from "@/services/team";

export default function TeamPage() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#facc15");
  const [invite, setInvite] = useState("");
  const queryClient = useQueryClient();

  const teamsQuery = useQuery({
    queryKey: ["team"],
    queryFn: teamService.list,
  });

  const createTeam = useMutation({
    mutationFn: () => teamService.create({ name, color }),
    onSuccess: () => {
      setName("");
      queryClient.invalidateQueries({ queryKey: ["team"] });
    },
  });

  const joinTeam = useMutation({
    mutationFn: () => teamService.join(invite),
    onSuccess: () => {
      setInvite("");
      queryClient.invalidateQueries({ queryKey: ["team"] });
    },
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-amber-200">تیم</p>
          <h1 className="text-3xl font-semibold text-slate-50">فضای تیم و چت</h1>
          <p className="text-sm text-slate-400">
            `/api/team` ، `/api/team/:id/messages` ، استریم از `/api/events/stream?teamId=...`.
          </p>
        </div>
        <Button onClick={() => queryClient.invalidateQueries({ queryKey: ["team"] })}>به‌روزرسانی</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card title="ایجاد تیم">
          <div className="grid gap-3 sm:grid-cols-[1fr,140px] sm:items-end">
            <Input
              label="نام"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="توسعه"
            />
            <Input
              label="رنگ"
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
            <Button disabled={!name} onClick={() => createTeam.mutate()} className="sm:col-span-2">
              ایجاد تیم
            </Button>
          </div>
        </Card>

        <Card title="پیوستن به تیم">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
            <Input
              label="کد دعوت"
              value={invite}
              onChange={(e) => setInvite(e.target.value)}
              placeholder="team_abc123"
            />
            <Button disabled={!invite} onClick={() => joinTeam.mutate()} className="sm:w-32">
              پیوستن
            </Button>
          </div>
        </Card>
      </div>

      <Card title="تیم‌های شما">
        {teamsQuery.isLoading && <p className="text-slate-500">در حال بارگذاری تیم‌ها…</p>}
        {!teamsQuery.isLoading && teamsQuery.data?.length === 0 && (
          <p className="text-slate-500">هنوز تیمی ندارید.</p>
        )}
        <div className="grid gap-3 md:grid-cols-2">
          {teamsQuery.data?.map((team) => (
            <div
              key={team.id}
              className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3"
            >
              <div>
                <p className="text-lg font-semibold text-slate-50">{team.name}</p>
                <p className="text-xs text-slate-500">اعضا: {team.members?.length ?? 0}</p>
              </div>
              <Link href={`/team/${team.id}`}>
                <Button variant="secondary">مشاهده</Button>
              </Link>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
