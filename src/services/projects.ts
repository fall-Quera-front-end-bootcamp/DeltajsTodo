import { api, USE_MOCKS } from "@/lib/api";
import type { Project, ProjectSummary } from "@/types/api";
import { unwrap } from "./utils";
import { mockApi } from "@/lib/mockData";

export const projectsService = {
  list: async (): Promise<ProjectSummary[]> => {
    if (USE_MOCKS) return mockApi.projects.list();
    const { data } = await api.get<ProjectSummary[] | { data: ProjectSummary[] }>("/project");
    return unwrap<ProjectSummary[]>(data) ?? [];
  },

  get: async (id: string): Promise<Project | null> => {
    if (USE_MOCKS) return mockApi.projects.get(id);
    const { data } = await api.get<Project | { data: Project }>(`/project/${id}`);
    return unwrap<Project | null>(data) ?? null;
  },

  create: async (payload: Pick<Project, "name" | "color" | "teamId" | "description">) => {
    if (USE_MOCKS) return mockApi.projects.create(payload);
    const { data } = await api.post<Project | { data: Project }>("/project", payload);
    return unwrap<Project>(data);
  },

  remove: async (id: string) => {
    if (USE_MOCKS) return mockApi.projects.remove(id);
    await api.delete(`/project/${id}`);
  },
};
