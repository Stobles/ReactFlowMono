import type { CSSProperties } from "react";

export const PositionsList = {
  Top: "top",
  Bottom: "bottom",
  Left: "left",
  Right: "right",
} as const;

export type Positions = keyof typeof PositionsList;

export interface Coordinates {
  x: number;
  y: number;
}

export interface Node {
  id: string;
  coordinates: Coordinates;
  __internal: unknown;
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

export interface Edge {
  id: string;
  sourceXY: Coordinates;
  targetXY: Coordinates;
}

export interface BezierEgde extends Edge {
  sourcePosition: Positions;
  targetPosition: Positions;
}

export type GridTypes = "lines" | "dots";
