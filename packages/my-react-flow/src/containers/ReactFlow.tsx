import { useRef, useEffect } from "react";
import Graph from "./Graph";

import "../styles/styles.css";
import { useAppStore } from "../store/store";
import { useResizeObserver } from "../hooks/useResizeObserver";
import type { GridTypes, Node } from "../types";

export default function ReactFlow({
  nodes,
  backgroundType,
}: {
  nodes: Node[];
  backgroundType?: GridTypes;
}) {
  const containerNode = useRef<HTMLDivElement | null>(null);

  const setNodes = useAppStore((s) => s.setNodes);
  const setSize = useAppStore((s) => s.setSize);

  useResizeObserver([containerNode], (entry) => {
    setSize(entry.contentRect.width, entry.contentRect.height);
  });

  useEffect(() => {
    setNodes(nodes);
  }, []);

  return (
    <div className="react-flow" ref={containerNode}>
      <Graph backgroundType={backgroundType} />
    </div>
  );
}
