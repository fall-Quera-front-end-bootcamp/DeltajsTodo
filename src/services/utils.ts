type WithData<T> = { data: T };

export const unwrap = <T>(payload: unknown): T => {
  if (payload && typeof payload === "object" && "data" in (payload as Record<string, unknown>)) {
    return (payload as WithData<T>).data;
  }
  return payload as T;
};
