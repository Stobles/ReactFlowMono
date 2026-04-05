import { DragDropProvider } from "@dnd-kit/react";
import BasicNode from "../components/Nodes/Node";
import { useAppStore } from "../store/store";
import type { Node } from "../types";
import DraggableWrapper from "@/components/Nodes/DraggableWrapper";

export default function NodeRenderer() {
  const { nodes, updateNode } = useAppStore((s) => ({
    nodes: s.nodes,
    updateNode: s.updateNode,
  }));
  const { x, y, scale } = useAppStore((s) => s.transform);

  console.log(nodes);
  return (
    <DragDropProvider
      onDragMove={(event) => {
        if (!event) return;

        const [x, y] = [event.to?.x || 0, event.to?.y || 0];
        const node = event.operation.source?.data.node as Node;

        if (!node)
          throw new Error("Error while updating coordinates of draggable node");

        node.coordinates = { x, y };
      }}
    >
      <div
        className="react-flow-nodes"
        style={{
          transform: `translate(${x}px, ${y}px) scale(${scale})`,
        }}
      >
        {nodes.map((node) => (
          <DraggableWrapper id={node.id}>
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
