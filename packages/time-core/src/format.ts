export type TimeParts = {
  hours: string;
  minutes: string;
  seconds: string;
  centiseconds: string;
};

export const formatTimeParts = (ms: number): TimeParts => {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const centiseconds = Math.floor((ms % 1000) / 10);

  return {
    hours: hours.toString().padStart(2, "0"),
    minutes: minutes.toString().padStart(2, "0"),
    seconds: seconds.toString().padStart(2, "0"),
    centiseconds: centiseconds.toString().padStart(2, "0"),
  };
};

export const formatDisplay = (ms: number) => {
  const t = formatTimeParts(ms);
  return `${t.hours}:${t.minutes}:${t.seconds}.${t.centiseconds}`;
};
