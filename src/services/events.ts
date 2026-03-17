import { apiUrl, USE_MOCKS } from "@/lib/api";

export type EventMessage<T = unknown> = {
  type: string;
  payload: T;
};

export const eventsService = {
  subscribe: (teamId?: string, handler?: (event: EventMessage) => void) => {
    if (USE_MOCKS || typeof window === "undefined") return null;
    const url = new URL(apiUrl("/events/stream"), window.location.origin);
    if (teamId) url.searchParams.set("teamId", teamId);

    const source = new EventSource(url.toString(), { withCredentials: true } as EventSourceInit);

    source.onmessage = (evt) => {
      try {
        const parsed = JSON.parse(evt.data) as EventMessage;
        handler?.(parsed);
      } catch {
        // ignore malformed payloads
      }
    };

    return source;
  },
};
