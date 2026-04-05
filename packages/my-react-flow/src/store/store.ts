import type { Node } from "@/types";
import { create } from "zustand";

interface TransformType {
  x: number;
  y: number;
  scale: number;
}

interface AppState {
  myNodes: Node[];
  width: number;
  height: number;
  transform: TransformType;
  setTransform: (transform: TransformType) => void;
  setSize: (width: number, height: number) => void;
  setNodes: (nodes: Node[]) => void;
  updateNode: (id: string, newNode: Partial<Node>) => void;
}

export const useAppStore = create<AppState>((set) => ({
  myNodes: [],
  width: 0,
  height: 0,
  transform: { x: 0, y: 0, scale: 1 },
  setTransform: (transform) => set({ transform }),
  setSize: (width, height) => set({ width, height }),
  setNodes: (nodes) => set({ myNodes: nodes }),
  updateNode: (id, newData) =>
    set(({ myNodes }) => ({
      myNodes: myNodes.map((node) => {
        if (node.id === id) return { ...node, ...newData };
        return node;
      }),
    })),
}));
