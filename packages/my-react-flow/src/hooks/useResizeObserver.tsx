import { useEffect, type MutableRefObject } from "react";

export const useResizeObserver = (
  nodes: MutableRefObject<HTMLElement | null>[],
  callback: (entry: ResizeObserverEntry, index: number) => void,
) => {
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      nodes.forEach((node, index) => {
        console.log(node);
        if (!node) return;

        const entry = entries.find((e) => e.target === node.current);

        if (entry) {
          callback(entry, index);
        }
      });
    });

    for (let node of nodes) {
      console.log(node);
      if (node.current) resizeObserver.observe(node.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [nodes, callback]);
};
