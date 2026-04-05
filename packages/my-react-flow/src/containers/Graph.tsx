import { useRef, useEffect } from "react";
import BackgroundGrid from "../components/BackgroundGrid";
import { useZoom } from "../hooks/useZoom";
import NodeRenderer from "./NodeRenderer";
import type { GridTypes, Node } from "../types";
import { useAppStore } from "@/store/store";

export default function Graph({
  backgroundType,
}: {
  backgroundType?: GridTypes;
}) {
  const panRef = useRef<HTMLDivElement | null>(null);

  useZoom(panRef);

  return (
    <div className="react-flow-graph">
      <NodeRenderer />
      <BackgroundGrid type={backgroundType} />
      <div className="react-flow-panzoom" ref={panRef} />
    </div>
  );
}
