import { api, USE_MOCKS } from "@/lib/api";
import type { PlannerTask } from "@/types/api";
import { unwrap } from "./utils";
import { mockApi } from "@/lib/mockData";

export type PlannerView = "today" | "week" | "all";

export const plannerService = {
  list: async (view: PlannerView = "today"): Promise<PlannerTask[]> => {
    if (USE_MOCKS) return mockApi.planner.list();
    const { data } = await api.get<PlannerTask[] | { data: PlannerTask[] }>("/planner/tasks", {
      params: { view },
    });
    return unwrap<PlannerTask[]>(data) ?? [];
  },

  create: async (
    payload: Pick<PlannerTask, "title" | "dueDate" | "priority" | "projectId">,
  ): Promise<PlannerTask> => {
    if (USE_MOCKS) return mockApi.planner.create(payload);
    const { data } = await api.post<PlannerTask | { data: PlannerTask }>("/planner/tasks", payload);
    return unwrap<PlannerTask>(data);
  },

  update: async (
    id: string,
    updates: Partial<Pick<PlannerTask, "title" | "status" | "dueDate" | "priority" | "projectId" | "notes">>,
  ): Promise<PlannerTask> => {
    if (USE_MOCKS) return mockApi.planner.update(id, updates);
    const { data } = await api.patch<PlannerTask | { data: PlannerTask }>(
      `/planner/tasks/${id}`,
      updates,
    );
    return unwrap<PlannerTask>(data);
  },
};
