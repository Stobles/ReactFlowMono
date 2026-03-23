import type { CSSProperties } from "react";
import type { GridTypes } from "../types";

const baseStyles: CSSProperties = {
  top: 0,
  left: 0,
  position: "absolute",
};

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
  size = 0.5,
  type = "dots",
}: {
  styles?: CSSProperties;
  gap?: number;
  size?: number;
  type?: GridTypes;
}) {
  const width = 1024;
  const height = 1024;

  const xOffest = width % gap;
  const yOffset = height % gap;

  const path =
    type === "dots"
      ? createDotGrid(width, height, xOffest, yOffset, gap, size)
      : "";

  return (
    <svg width={width} height={height} style={{ ...baseStyles, ...styles }}>
      <path d={path} />
    </svg>
  );
}
