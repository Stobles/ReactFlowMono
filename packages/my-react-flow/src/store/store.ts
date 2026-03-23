import { create } from "zustand";

interface AppState {
  size: { width: number; height: number };
  setSize: (width: number, height: number) => void;
}

export const useAppStore = create<AppState>((set) => ({
  size: { width: 0, height: 0 },
  setSize: (width, height) => set({ size: { width, height } }),
}));
