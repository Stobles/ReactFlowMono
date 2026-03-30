import { isReactNode } from "../lib/isReactNode";
import type { NodeProps } from "../types";

export default function Node({ coordinates, data, styles }: NodeProps) {
  if (!isReactNode(data)) return;

  const transformStyles = `translate(${coordinates.x}px, ${coordinates.y}px)`;
  return (
    <div
      className="react-flow-node"
      style={{
        ...styles,
        transform: transformStyles,
      }}
    >
      {data}
    </div>
  );
}
