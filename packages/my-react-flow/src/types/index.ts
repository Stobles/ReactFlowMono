import type { CSSProperties } from "react";

export interface Coordinates {
  x: number;
  y: number;
}

export interface Node {
  id: number;
  coordinates: Coordinates;
  data?: unknown;
  styles?: CSSProperties;
  sourcePosition?: string;
  targetPosition?: string;
}

export interface NodeProps {
  id: number;
  coordinates: Coordinates;
  data?: unknown;
  styles?: CSSProperties;
  sourcePosition?: string;
  targetPosition?: string;
}

export type GridTypes = "lines" | "dots";
