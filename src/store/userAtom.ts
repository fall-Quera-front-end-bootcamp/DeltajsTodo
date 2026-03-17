import { atom } from "jotai";
import type { User } from "@/types/api";

export const userAtom = atom<User | null>(null);
