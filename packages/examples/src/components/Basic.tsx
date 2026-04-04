import ReactFlow from "my-react-flow";
import type { Node } from "my-react-flow";

import "my-react-flow/my-react-flow.css";

const nodes: Node[] = [
  {
    id: "node1",
    coordinates: { x: 500, y: 200 },
    data: "Проверка",
  },
  {
    id: "node2",
    coordinates: { x: 400, y: 200 },
    data: "Проверка",
  },
  {
    id: "node3",
    coordinates: { x: 200, y: 200 },
    data: "Проверка",
  },
];

export default function Basic() {
  return <ReactFlow nodes={nodes} />;
}
