import { api, USE_MOCKS } from "@/lib/api";
import type { PomodoroSession } from "@/types/api";
import { unwrap } from "./utils";
import { mockApi } from "@/lib/mockData";

export const pomodoroService = {
  start: async (payload?: { note?: string; durationMinutes?: number }) => {
    if (USE_MOCKS) return mockApi.pomodoro.start(payload);
    const { data } = await api.post<PomodoroSession | { data: PomodoroSession }>(
      "/pomodoro/start",
      payload ?? {},
    );
    return unwrap<PomodoroSession>(data);
  },

  stop: async (payload?: { reason?: string }) => {
    if (USE_MOCKS) return mockApi.pomodoro.stop();
    const { data } = await api.post<PomodoroSession | { data: PomodoroSession }>(
      "/pomodoro/stop",
      payload ?? {},
    );
    return unwrap<PomodoroSession>(data);
  },

  history: async (): Promise<PomodoroSession[]> => {
    if (USE_MOCKS) return mockApi.pomodoro.history();
    const { data } = await api.get<PomodoroSession[] | { data: PomodoroSession[] }>(
      "/pomodoro/history",
    );
    return unwrap<PomodoroSession[]>(data) ?? [];
  },
};
