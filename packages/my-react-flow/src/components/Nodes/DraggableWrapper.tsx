import type { Node } from "@/types";
import { useDraggable } from "@dnd-kit/react";

export default function DraggableWrapper({
  id,
  node,
  children,
}: {
  id: string;
  node: Node;
  children: React.ReactNode;
}) {
  const { ref } = useDraggable({
    id: `draggable-${id}`,
    data: {
      node,
    },
  });

  return <div ref={ref}>{children}</div>;
}
