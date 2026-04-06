import type { Node } from "@/types";
import { useDraggable } from "@dnd-kit/react";
import type { CSSProperties } from "react";

export default function DraggableWrapper({
  id,
  node,
  children,
  styles,
}: {
  id: string;
  node: Node;
  children: React.ReactNode;
  styles?: CSSProperties;
}) {
  const { ref } = useDraggable({
    id: `draggable-${id}`,
    data: {
      node,
    },
  });

  return (
    <div ref={ref} style={{ transition: "none", animation: "none", ...styles }}>
      {children}
    </div>
  );
}
