import { api, USE_MOCKS, WS_BASE } from "@/lib/api";
import type { IceServer, VoiceRoom } from "@/types/api";
import { unwrap } from "./utils";
import { mockApi } from "@/lib/mockData";

export const voiceService = {
  iceServers: async (): Promise<IceServer[]> => {
    if (USE_MOCKS) return mockApi.voice.ice();
    const { data } = await api.get<IceServer[] | { data: IceServer[] }>("/voice/ice");
    return unwrap<IceServer[]>(data) ?? [];
  },

  listRooms: async (): Promise<VoiceRoom[]> => {
    if (USE_MOCKS) return mockApi.voice.rooms();
    const { data } = await api.get<VoiceRoom[] | { data: VoiceRoom[] }>("/voice/rooms");
    return unwrap<VoiceRoom[]>(data) ?? [];
  },

  createRoom: async (payload: Pick<VoiceRoom, "name" | "teamId">): Promise<VoiceRoom> => {
    if (USE_MOCKS) return mockApi.voice.create(payload);
    const { data } = await api.post<VoiceRoom | { data: VoiceRoom }>("/voice/rooms", payload);
    return unwrap<VoiceRoom>(data);
  },

  socketUrl: (roomId?: string) => {
    const base = WS_BASE || (typeof window !== "undefined" ? window.location.origin.replace(/^http/, "ws") : "");
    const normalizedBase = base.replace(/\/+$/, "");
    const suffix = roomId ? `/voice?roomId=${roomId}` : "/voice";
    return `${normalizedBase}${suffix}`;
  },
};
