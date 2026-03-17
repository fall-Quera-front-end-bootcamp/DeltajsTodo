import { api, USE_MOCKS } from "@/lib/api";
import type { Team, TeamMessage } from "@/types/api";
import { unwrap } from "./utils";
import { mockApi } from "@/lib/mockData";

export const teamService = {
  list: async (): Promise<Team[]> => {
    if (USE_MOCKS) return mockApi.team.list();
    const { data } = await api.get<Team[] | { data: Team[] }>("/team");
    return unwrap<Team[]>(data) ?? [];
  },

  get: async (id: string): Promise<Team | null> => {
    if (USE_MOCKS) return mockApi.team.get(id);
    const { data } = await api.get<Team | { data: Team }>(`/team/${id}`);
    return unwrap<Team | null>(data) ?? null;
  },

  create: async (payload: Pick<Team, "name" | "color">): Promise<Team> => {
    if (USE_MOCKS) return mockApi.team.create(payload);
    const { data } = await api.post<Team | { data: Team }>("/team", payload);
    return unwrap<Team>(data);
  },

  join: async (inviteCode: string): Promise<Team> => {
    if (USE_MOCKS) return mockApi.team.join(inviteCode);
    const { data } = await api.post<Team | { data: Team }>("/team/join", { inviteCode });
    return unwrap<Team>(data);
  },

  messages: async (teamId: string): Promise<TeamMessage[]> => {
    if (USE_MOCKS) return mockApi.team.messages(teamId);
    const { data } = await api.get<TeamMessage[] | { data: TeamMessage[] }>(
      `/team/${teamId}/messages`,
    );
    return unwrap<TeamMessage[]>(data) ?? [];
  },

  sendMessage: async (teamId: string, body: string): Promise<TeamMessage> => {
    if (USE_MOCKS) return mockApi.team.sendMessage(teamId, body);
    const { data } = await api.post<TeamMessage | { data: TeamMessage }>(
      `/team/${teamId}/messages`,
      { body },
    );
    return unwrap<TeamMessage>(data);
  },
};
