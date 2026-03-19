import { formatTimeParts } from "./format";
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
export declare const useStopwatch: (options?: UseStopwatchOptions) => UseStopwatchResult;
//# sourceMappingURL=useStopwatch.d.ts.map