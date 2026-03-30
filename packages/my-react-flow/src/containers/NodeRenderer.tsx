import Node from "../components/Node";
import { useAppStore } from "../store/store";

export default function NodeRenderer() {
  const { x, y, scale } = useAppStore((s) => s.transform);
  return (
    <div
      className="react-flow-nodes"
      style={{
        transform: `translate(${x}px, ${y}px) scale(${scale})`,
      }}
    >
      <Node id={1} coordinates={{ x: 50, y: 200 }} data={"Тест"} />
    </div>
  );
}
