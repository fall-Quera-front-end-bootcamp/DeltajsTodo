import { useEffect } from "react";
import { eventsService, type EventMessage } from "@/services/events";

export const useRealtime = (teamId: string | undefined, onEvent: (event: EventMessage) => void) => {
  useEffect(() => {
    const source = eventsService.subscribe(teamId, onEvent);
    return () => {
      source?.close();
    };
  }, [teamId, onEvent]);
};
