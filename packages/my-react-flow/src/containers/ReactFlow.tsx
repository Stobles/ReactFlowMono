import { useRef } from "react";
import Graph from "./Graph";

import "../styles.css";

export default function ReactFlow() {
  const containerNode = useRef<HTMLDivElement | null>(null);

  return (
    <div className="react-flow" ref={containerNode}>
      <Graph />
    </div>
  );
}
