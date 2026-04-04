import { useRef } from "react";
import BackgroundGrid from "../components/BackgroundGrid";
import { useZoom } from "../hooks/useZoom";
import NodeRenderer from "./NodeRenderer";
import type { Node } from "../types";

export default function Graph({ nodes }: { nodes: Node[] }) {
  const panRef = useRef<HTMLDivElement | null>(null);

  useZoom(panRef);
  return (
    <div className="react-flow-graph">
      <NodeRenderer nodes={nodes} />
      <BackgroundGrid />
      <div className="react-flow-panzoom" ref={panRef} />
    </div>
  );
}
