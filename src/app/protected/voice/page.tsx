'use client';

import { useState } from "react";
import Link from "next/link";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import { voiceService } from "@/services/voice";

export default function VoicePage() {
  const [name, setName] = useState("");
  const queryClient = useQueryClient();

  const roomsQuery = useQuery({
    queryKey: ["voice", "rooms"],
    queryFn: voiceService.listRooms,
  });

  const createRoom = useMutation({
    mutationFn: () => voiceService.createRoom({ name }),
    onSuccess: () => {
      setName("");
      queryClient.invalidateQueries({ queryKey: ["voice"] });
    },
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-amber-200">صوت</p>
          <h1 className="text-3xl font-semibold text-slate-50">اتاق‌های صوتی</h1>
          <p className="text-sm text-slate-400">
            فهرست اتاق‌ها از `/api/voice/rooms`؛ پیوستن با وب‌سوکت `NEXT_PUBLIC_WS_BASE/voice`.
          </p>
        </div>
        <Button onClick={() => queryClient.invalidateQueries({ queryKey: ["voice"] })}>به‌روزرسانی</Button>
      </div>

      <Card title="ایجاد اتاق">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
          <Input
            label="نام اتاق"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="استندآپ روزانه"
          />
          <Button disabled={!name} onClick={() => createRoom.mutate()} className="sm:w-32">
            ایجاد
          </Button>
        </div>
      </Card>

      <Card title="اتاق‌های موجود">
        {roomsQuery.isLoading && <p className="text-slate-500">در حال بارگذاری اتاق‌ها…</p>}
        {!roomsQuery.isLoading && roomsQuery.data?.length === 0 && (
          <p className="text-slate-500">اتاقی وجود ندارد.</p>
        )}
        <div className="grid gap-3 md:grid-cols-2">
          {roomsQuery.data?.map((room) => (
            <div
              key={room.id}
              className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3"
            >
              <div>
                <p className="text-lg font-semibold text-slate-50">{room.name}</p>
                <p className="text-xs text-slate-500">شناسه اتاق: {room.id}</p>
              </div>
              <Link href={`/voice/${room.id}`}>
                <Button variant="secondary">ورود</Button>
              </Link>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
