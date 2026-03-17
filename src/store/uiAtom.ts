import { atom } from "jotai";

export const themeAtom = atom<"light" | "dark">("dark");
export const sidebarOpenAtom = atom<boolean>(false);
