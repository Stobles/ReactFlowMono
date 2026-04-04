import type { CSSProperties } from "react";
import type { GridTypes } from "../types";
import { useAppStore } from "../store/store";

function createLineGrid(
  width: number,
  height: number,
  xOffest: number,
  yOffset: number,
  gap: number,
) {
  const xLines = Array.from({ length: height / gap + 1 }, (_, index) => {
    const y = gap * index + yOffset;
    return `M${0} ${y} L${width} ${y}z`;
  });

  const yLines = Array.from({ length: width / gap + 1 }, (_, index) => {
    const x = gap * index + xOffest;
    return `M${x} ${0} L${x} ${height}z`;
  });

  return [...xLines, ...yLines].join(" ");
}

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
      : createLineGrid(width, height, xOffest, yOffset, scaledGap);

  return (
    <svg
      className="react-flow-background-grid"
      width={width}
      height={height}
      style={{
        ...styles,
        stroke:
          type === "dots"
            ? "var(--rf-color-background-dot-stroke)"
            : "var(--rf-color-background-line-stroke)",
      }}
    >
      <path strokeWidth={size} d={path} />
    </svg>
  );
}
