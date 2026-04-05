import { useDraggable } from "@dnd-kit/react";

export default function DraggableWrapper({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const { ref } = useDraggable({
    id: `draggable-${id}`,
  });

  return <div ref={ref}>{children}</div>;
}
