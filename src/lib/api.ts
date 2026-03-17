import axios from "axios";

const API_BASE = (import.meta.env.NEXT_PUBLIC_API_BASE || "/api").replace(/\/+$/, "");

export const WS_BASE = (import.meta.env.NEXT_PUBLIC_WS_BASE || "").replace(/\/+$/, "");

export const USE_MOCKS = import.meta.env.NEXT_PUBLIC_USE_MOCKS === "true";

export const api = axios.create({
  baseURL: API_BASE || "/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;
    if (typeof window !== "undefined" && status === 401) {
      const params = new URLSearchParams();
      params.set("next", window.location.pathname + window.location.search);
      if (!window.location.pathname.startsWith("/login")) {
        window.location.href = `/login?${params.toString()}`;
      }
    }
    return Promise.reject(error);
  },
);

export const apiUrl = (path: string) => {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${API_BASE || ""}${normalized}`;
};

export type ApiListResponse<T> = {
  data: T[];
  total?: number;
};

export type ApiItemResponse<T> = {
  data: T;
};
