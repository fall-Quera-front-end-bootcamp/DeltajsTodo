import { api, USE_MOCKS } from "@/lib/api";
import type { Timer } from "@/types/api";
import { unwrap } from "./utils";
import { mockApi } from "@/lib/mockData";

export const timerService = {
  list: async (): Promise<Timer[]> => {
    if (USE_MOCKS) return mockApi.timers.list();
    const { data } = await api.get<Timer[] | { data: Timer[] }>("/timer");
    return unwrap<Timer[]>(data) ?? [];
  },

  create: async (payload: Pick<Timer, "label"> & { elapsedMs?: number; laps?: number[] }) => {
    if (USE_MOCKS) return mockApi.timers.create(payload);
    const { data } = await api.post<Timer | { data: Timer }>("/timer", payload);
    return unwrap<Timer>(data);
  },

  update: async (
    id: string,
    updates: Partial<Pick<Timer, "label" | "elapsedMs" | "laps">>,
  ): Promise<Timer> => {
    if (USE_MOCKS) return mockApi.timers.update(id, updates);
    const { data } = await api.patch<Timer | { data: Timer }>(`/timer/${id}`, updates);
    return unwrap<Timer>(data);
  },
};
