import { useRef } from "react";
import BackgroundGrid from "../components/BackgroundGrid";
import { useZoom } from "../hooks/useZoom";
import NodeRenderer from "./NodeRenderer";

export default function Graph() {
  const panRef = useRef<HTMLDivElement | null>(null);

  useZoom(panRef);
  return (
    <div className="react-flow-graph">
      <NodeRenderer />
      <BackgroundGrid />
      <div className="react-flow-panzoom" ref={panRef} />
    </div>
  );
}
