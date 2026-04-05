import { useRef } from "react";

import { DragDropProvider } from "@dnd-kit/react";
import BasicNode from "../components/Nodes/Node";
import { useAppStore } from "../store/store";
import DraggableWrapper from "@/components/Nodes/DraggableWrapper";
import type { Node } from "@/types";
import { Feedback } from "@dnd-kit/dom";

export default function NodeRenderer() {
  const nodesLayerRef = useRef<HTMLDivElement>(null);
  const nodes = useAppStore((s) => s.myNodes);
  const updateNode = useAppStore((s) => s.updateNode);
  const { x, y, scale } = useAppStore((s) => s.transform);

  return (
    <DragDropProvider
      plugins={(defaults) => [
        ...defaults,
        Feedback.configure({
          dropAnimation: null,

          // Клон/переносимый элемент остаётся в том же фрейме, что и канвас с zoom,
          // иначе getFrameTransform даёт scale 1 и превью «плывёт» относительно курсора.
          rootElement: () => nodesLayerRef.current ?? document.body,
        }),
      ]}
      onDragEnd={(event) => {
        if (!event) return;

        const node = event.operation.source?.data.node as Node;
        if (!node) return;

        const offsetX = event.operation.transform?.x ?? 0;
        const offsetY = event.operation.transform?.y ?? 0;
        const k = scale;
        // transform из операции — в координатах экрана; координаты ноды — в локальном
        // пространстве слоя до CSS scale().
        const newCoords = {
          x: node.coordinates.x + offsetX / k,
          y: node.coordinates.y + offsetY / k,
        };

        updateNode(node.id, {
          coordinates: newCoords,
        });
      }}
    >
      <div
        ref={nodesLayerRef}
        className="react-flow-nodes"
        style={{ willChange: "transform" }}
      >
        {nodes.map((node) => (
          <DraggableWrapper
            key={node.id}
            id={node.id}
            node={node}
            styles={{
              transform: `translate(${x}px, ${y}px) scale(${scale}) translateZ(0)`,
              transformOrigin: "0 0",
            }}
          >
            <BasicNode
              key={node.id}
              id={node.id}
              coordinates={node.coordinates}
              data={node.data}
            />
          </DraggableWrapper>
        ))}
      </div>
    </DragDropProvider>
  );
}
