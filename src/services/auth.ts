import { api, apiUrl, USE_MOCKS } from "@/lib/api";
import type { StopwatchPersist, User } from "@/types/api";
import { unwrap } from "./utils";
import { mockApi } from "@/lib/mockData";

export const authService = {
  me: async (): Promise<User | null> => {
    if (USE_MOCKS) return mockApi.getUser();
    const { data } = await api.get<{ user?: User | null } | User | null>("/auth/me");
    if (data && typeof data === "object" && "user" in data) {
      return (data as { user?: User | null }).user ?? null;
    }
    return unwrap<User | null>(data) ?? null;
  },

  logout: async () => {
    if (USE_MOCKS) return;
    await api.get("/auth/logout");
  },

  updateProfile: async (payload: Partial<Pick<User, "name" | "theme" | "avatarColor">>) => {
    if (USE_MOCKS) return mockApi.updateUser(payload);
    const { data } = await api.post<{ user: User } | User>("/user/preferences", payload);
    if (data && typeof data === "object" && "user" in data) {
      return (data as { user: User }).user;
    }
    return unwrap<User>(data);
  },

  redirectToProvider: (provider: "google" | "github") => {
    if (USE_MOCKS) {
      if (typeof window !== "undefined") {
        window.location.href = "/dashboard";
      }
      return;
    }
    if (typeof window === "undefined") return;
    const target = apiUrl(`/auth/${provider}`);
    window.location.href = target;
  },

  saveStopwatch: async (snapshot: StopwatchPersist) => {
    if (USE_MOCKS) return mockApi.saveStopwatch(snapshot);
    await api.post("/user/stopwatch", snapshot);
  },

  loadStopwatch: async (): Promise<StopwatchPersist | null> => {
    if (USE_MOCKS) return mockApi.loadStopwatch();
    const { data } = await api.get<{ lastStopwatch: StopwatchPersist | null } | StopwatchPersist | null>(
      "/user/stopwatch",
    );
    if (data && typeof data === "object" && "lastStopwatch" in data) {
      return (data as { lastStopwatch: StopwatchPersist | null }).lastStopwatch ?? null;
    }
    return unwrap<StopwatchPersist | null>(data) ?? null;
  },
};
