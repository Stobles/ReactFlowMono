import { useRef } from "react";
import BackgroundGrid from "../components/BackgroundGrid";
import { useZoom } from "../hooks/useZoom";
import NodeRenderer from "./NodeRenderer";
import type { GridTypes, Node } from "../types";

export default function Graph({
  nodes,
  backgroundType,
}: {
  nodes: Node[];
  backgroundType?: GridTypes;
}) {
  const panRef = useRef<HTMLDivElement | null>(null);

  useZoom(panRef);
  return (
    <div className="react-flow-graph">
      <NodeRenderer nodes={nodes} />
      <BackgroundGrid type={backgroundType} />
      <div className="react-flow-panzoom" ref={panRef} />
    </div>
  );
}
