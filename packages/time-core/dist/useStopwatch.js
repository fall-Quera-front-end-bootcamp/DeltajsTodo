import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { formatDisplay, formatTimeParts } from "./format";
const clampSnapshot = (snap) => {
    var _a;
    return ({
        elapsedMs: Math.max(0, (_a = snap === null || snap === void 0 ? void 0 : snap.elapsedMs) !== null && _a !== void 0 ? _a : 0),
        laps: Array.isArray(snap === null || snap === void 0 ? void 0 : snap.laps) ? snap.laps.map((l) => Math.max(0, l)) : [],
    });
};
export const useStopwatch = (options = {}) => {
    const { tickMs = 10, initialSnapshot } = options;
    const [elapsedMs, setElapsedMs] = useState(() => clampSnapshot(initialSnapshot).elapsedMs);
    const [laps, setLaps] = useState(() => clampSnapshot(initialSnapshot).laps);
    const [isRunning, setIsRunning] = useState(false);
    const startRef = useRef(0);
    const elapsedRef = useRef(clampSnapshot(initialSnapshot).elapsedMs);
    const lapsRef = useRef(clampSnapshot(initialSnapshot).laps);
    const isRunningRef = useRef(false);
    const updateElapsed = (value) => {
        elapsedRef.current = value;
        setElapsedMs(value);
    };
    const updateLaps = (next) => {
        lapsRef.current = next;
        setLaps(next);
    };
    const computeElapsed = useCallback(() => {
        if (!isRunningRef.current)
            return elapsedRef.current;
        return elapsedRef.current + (Date.now() - startRef.current);
    }, []);
    useEffect(() => {
        if (!isRunning)
            return;
        const id = setInterval(() => {
            updateElapsed(computeElapsed());
        }, tickMs);
        return () => clearInterval(id);
    }, [computeElapsed, isRunning, tickMs]);
    const start = useCallback(() => {
        if (isRunning)
            return;
        startRef.current = Date.now();
        isRunningRef.current = true;
        setIsRunning(true);
    }, [isRunning]);
    const pause = useCallback(() => {
        if (!isRunning)
            return null;
        const current = computeElapsed();
        updateElapsed(current);
        isRunningRef.current = false;
        setIsRunning(false);
        return { elapsedMs: current, laps: lapsRef.current };
    }, [computeElapsed, isRunning]);
    const reset = useCallback(() => {
        setIsRunning(false);
        updateElapsed(0);
        updateLaps([]);
        isRunningRef.current = false;
        return { elapsedMs: 0, laps: [] };
    }, []);
    const lap = useCallback(() => {
        if (!isRunning)
            return null;
        const current = computeElapsed();
        updateElapsed(current);
        const nextLaps = [current, ...lapsRef.current];
        updateLaps(nextLaps);
        return { elapsedMs: current, laps: nextLaps };
    }, [computeElapsed, isRunning]);
    const setSnapshot = useCallback((snapshot) => {
        const next = clampSnapshot(snapshot);
        setIsRunning(false);
        updateElapsed(next.elapsedMs);
        updateLaps(next.laps);
        isRunningRef.current = false;
    }, []);
    const snapshot = useCallback(() => ({
        elapsedMs: elapsedRef.current,
        laps: lapsRef.current,
    }), []);
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
