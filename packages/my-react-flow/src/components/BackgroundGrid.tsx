import type { CSSProperties } from "react";
import type { GridTypes } from "../types";
import { useAppStore } from "../store/store";

function createDotGrid(
  width: number,
  height: number,
  xOffest: number,
  yOffset: number,
  gap: number,
  size: number,
) {
  return Array.from({ length: width / gap + 1 }, (_, col) => {
    const x = col * gap + xOffest;
    let sizeScaled = size * Math.max(gap / 24, 1);
    return Array.from({ length: height / gap + 1 }, (_, row) => {
      const y = row * gap + yOffset;
      return `M${x} ${y - size} l${size} ${size} l${size} ${-size} l${-size} ${-size}z`;
    }).join(" ");
  }).join(" ");
}

export default function BackgroundGrid({
  gap = 24,
  styles,
  size = 0.7,
  type = "dots",
}: {
  styles?: CSSProperties;
  gap?: number;
  size?: number;
  type?: GridTypes;
}) {
  const [width, height] = useAppStore((s) => [s.width, s.height]);

  const { x, y, scale } = useAppStore((s) => s.transform);

  const scaledGap = gap * scale;

  const xOffest = x % scaledGap;
  const yOffset = y % scaledGap;

  const path =
    type === "dots"
      ? createDotGrid(width, height, xOffest, yOffset, scaledGap, size)
      : "";

  return (
    <svg
      className="react-flow-background-grid"
      width={width}
      height={height}
      style={{ ...styles }}
    >
      <path strokeWidth={size} d={path} />
    </svg>
  );
}
