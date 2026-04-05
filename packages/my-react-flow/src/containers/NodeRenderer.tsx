import { useEffect } from "react";

import { DragDropProvider } from "@dnd-kit/react";
import BasicNode from "../components/Nodes/Node";
import { useAppStore } from "../store/store";
import DraggableWrapper from "@/components/Nodes/DraggableWrapper";
import type { Node } from "@/types";

export default function NodeRenderer() {
  const nodes = useAppStore((s) => s.myNodes);
  const updateNode = useAppStore((s) => s.updateNode);
  const { x, y, scale } = useAppStore((s) => s.transform);

  console.log("renderer", nodes);
  return (
    <DragDropProvider
      onDragEnd={(event) => {
        if (!event) return;

        const node = event.operation.source?.data.node as Node;

        const [x, y] = [
          event.operation.transform?.x || 0,
          event.operation.transform?.y || 0,
        ];

        console.log(x, y, node.coordinates);

        const newCoords = {
          x: node.coordinates.x + x,
          y: node.coordinates.y + y,
        };

        console.log(event.operation.source?.data.id);

        updateNode(node.id, {
          coordinates: newCoords,
        });
      }}
    >
      <div
        className="react-flow-nodes"
        style={{
          transform: `translate(${x}px, ${y}px) scale(${scale})`,
        }}
      >
        {nodes.map((node) => (
          <DraggableWrapper id={node.id} node={node}>
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
