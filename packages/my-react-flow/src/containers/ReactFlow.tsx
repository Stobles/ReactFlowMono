import { useRef } from "react";
import Graph from "./Graph";

import "../styles/styles.css";
import { useAppStore } from "../store/store";
import { useResizeObserver } from "../hooks/useResizeObserver";

export default function ReactFlow() {
  const containerNode = useRef<HTMLDivElement | null>(null);

  const setSize = useAppStore((s) => s.setSize);

  useResizeObserver([containerNode], (entry) => {
    setSize(entry.contentRect.width, entry.contentRect.height);
  });

  return (
    <div className="react-flow" ref={containerNode}>
      <Graph />
    </div>
  );
}
