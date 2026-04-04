import type { CSSProperties } from "react";

export interface Coordinates {
  x: number;
  y: number;
}

export interface Node {
  id: string;
  coordinates: Coordinates;
  data?: unknown;
  styles?: CSSProperties;
  sourcePosition?: string;
  targetPosition?: string;
}

export interface NodeProps {
  id: string;
  coordinates: Coordinates;
  data?: unknown;
  styles?: CSSProperties;
  sourcePosition?: string;
  targetPosition?: string;
}

export type GridTypes = "lines" | "dots";
