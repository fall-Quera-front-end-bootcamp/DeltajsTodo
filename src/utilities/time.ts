export type TimeMode = "24" | "12";

export const formatClock = (date: Date, mode: TimeMode) => {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  let suffix = "";
  if (mode === "12") {
    suffix = hours >= 12 ? " PM" : " AM";
    hours = hours % 12;
    if (hours === 0) hours = 12;
  }

  const pad = (n: number) => n.toString().padStart(2, "0");
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}${suffix}`;
};
