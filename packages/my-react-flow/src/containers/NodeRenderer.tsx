import BasicNode from "../components/Node";
import { useAppStore } from "../store/store";
import type { Node } from "../types";

export default function NodeRenderer({ nodes }: { nodes: Node[] }) {
  const { x, y, scale } = useAppStore((s) => s.transform);
  return (
    <div
      className="react-flow-nodes"
      style={{
        transform: `translate(${x}px, ${y}px) scale(${scale})`,
      }}
    >
      {nodes.map((node) => (
        <BasicNode
          key={node.id}
          id={node.id}
          coordinates={node.coordinates}
          data={node.data}
        />
      ))}
    </div>
  );
}
