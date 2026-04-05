import type { Node } from "@/types";
import { create } from "zustand";

interface TransformType {
  x: number;
  y: number;
  scale: number;
}

interface AppState {
  nodes: Node[];
  width: number;
  height: number;
  transform: TransformType;
  setTransform: (transform: TransformType) => void;
  setSize: (width: number, height: number) => void;
  setNodes: (nodes: Node[]) => void;
  updateNode: (newNode: Partial<Node>) => void;
}

export const useAppStore = create<AppState>((set) => ({
  nodes: [],
  width: 0,
  height: 0,
  transform: { x: 0, y: 0, scale: 1 },
  setTransform: (transform) => set({ transform }),
  setSize: (width, height) => set({ width, height }),
  setNodes: (nodes) => set({ nodes }),
  updateNode: (newNode) =>
    set(({ nodes }) => ({
      nodes: nodes.map((node) => {
        if (node.id === newNode.id) return { ...node, ...newNode };
        return node;
      }),
    })),
}));
