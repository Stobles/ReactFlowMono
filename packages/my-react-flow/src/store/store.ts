import { create } from "zustand";

interface TransformType {
  x: number;
  y: number;
  scale: number;
}

interface AppState {
  width: number;
  height: number;
  transform: TransformType;
  setTransform: (transform: TransformType) => void;
  setSize: (width: number, height: number) => void;
}

export const useAppStore = create<AppState>((set) => ({
  width: 0,
  height: 0,
  transform: { x: 0, y: 0, scale: 1 },
  setTransform: (transform: TransformType) => set({ transform }),
  setSize: (width, height) => set({ width, height }),
}));
