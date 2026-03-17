import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { formatDisplay, formatTimeParts } from "./format";

export type StopwatchSnapshot = {
  elapsedMs: number;
  laps: number[];
};

export type UseStopwatchOptions = {
  tickMs?: number;
  initialSnapshot?: StopwatchSnapshot;
};

export type UseStopwatchResult = {
  elapsedMs: number;
  laps: number[];
  isRunning: boolean;
  isPaused: boolean;
  start: () => void;
  pause: () => StopwatchSnapshot | null;
  reset: () => StopwatchSnapshot;
  lap: () => StopwatchSnapshot | null;
  setSnapshot: (snapshot: StopwatchSnapshot) => void;
  snapshot: () => StopwatchSnapshot;
  display: string;
  timeParts: ReturnType<typeof formatTimeParts>;
};

const clampSnapshot = (snap?: StopwatchSnapshot | null): StopwatchSnapshot => ({
  elapsedMs: Math.max(0, snap?.elapsedMs ?? 0),
  laps: Array.isArray(snap?.laps) ? snap!.laps.map((l) => Math.max(0, l)) : [],
});

export const useStopwatch = (options: UseStopwatchOptions = {}): UseStopwatchResult => {
  const { tickMs = 10, initialSnapshot } = options;

  const [elapsedMs, setElapsedMs] = useState(() => clampSnapshot(initialSnapshot).elapsedMs);
  const [laps, setLaps] = useState<number[]>(() => clampSnapshot(initialSnapshot).laps);
  const [isRunning, setIsRunning] = useState(false);

  const startRef = useRef<number>(0);
  const elapsedRef = useRef<number>(clampSnapshot(initialSnapshot).elapsedMs);
  const lapsRef = useRef<number[]>(clampSnapshot(initialSnapshot).laps);
  const isRunningRef = useRef(false);

  const updateElapsed = (value: number) => {
    elapsedRef.current = value;
    setElapsedMs(value);
  };

  const updateLaps = (next: number[]) => {
    lapsRef.current = next;
    setLaps(next);
  };

  const computeElapsed = useCallback(() => {
    if (!isRunningRef.current) return elapsedRef.current;
    return elapsedRef.current + (Date.now() - startRef.current);
  }, []);

  useEffect(() => {
    if (!isRunning) return;
    const id = setInterval(() => {
      updateElapsed(computeElapsed());
    }, tickMs);
    return () => clearInterval(id);
  }, [computeElapsed, isRunning, tickMs]);

  const start = useCallback(() => {
    if (isRunning) return;
    startRef.current = Date.now();
    isRunningRef.current = true;
    setIsRunning(true);
  }, [isRunning]);

  const pause = useCallback((): StopwatchSnapshot | null => {
    if (!isRunning) return null;
    const current = computeElapsed();
    updateElapsed(current);
    isRunningRef.current = false;
    setIsRunning(false);
    return { elapsedMs: current, laps: lapsRef.current };
  }, [computeElapsed, isRunning]);

  const reset = useCallback((): StopwatchSnapshot => {
    setIsRunning(false);
    updateElapsed(0);
    updateLaps([]);
    isRunningRef.current = false;
    return { elapsedMs: 0, laps: [] };
  }, []);

  const lap = useCallback((): StopwatchSnapshot | null => {
    if (!isRunning) return null;
    const current = computeElapsed();
    updateElapsed(current);
    const nextLaps = [current, ...lapsRef.current];
    updateLaps(nextLaps);
    return { elapsedMs: current, laps: nextLaps };
  }, [computeElapsed, isRunning]);

  const setSnapshot = useCallback((snapshot: StopwatchSnapshot) => {
    const next = clampSnapshot(snapshot);
    setIsRunning(false);
    updateElapsed(next.elapsedMs);
    updateLaps(next.laps);
    isRunningRef.current = false;
  }, []);

  const snapshot = useCallback(
    () => ({
      elapsedMs: elapsedRef.current,
      laps: lapsRef.current,
    }),
    [],
  );

  const isPaused = !isRunning && elapsedMs > 0;
  const timeParts = useMemo(() => formatTimeParts(elapsedMs), [elapsedMs]);
  const display = useMemo(() => formatDisplay(elapsedMs), [elapsedMs]);

  return {
    elapsedMs,
    laps,
    isRunning,
    isPaused,
    start,
    pause,
    reset,
    lap,
    setSnapshot,
    snapshot,
    display,
    timeParts,
  };
};
