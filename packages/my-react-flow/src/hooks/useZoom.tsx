import * as d3zoom from "d3-zoom";
import { useEffect, type MutableRefObject } from "react";
import { useAppStore } from "../store/store";
import { select } from "d3-selection";

const d3ZoomInstance = d3zoom.zoom().scaleExtent([0.5, 2]);

export const useZoom = (
  elem: MutableRefObject<Element | null>,
  onMove?: () => void,
) => {
  const setTransform = useAppStore((s) => s.setTransform);
  useEffect(() => {
    if (elem.current === null) return;

    select(elem.current).call(d3ZoomInstance);

    d3ZoomInstance.on(
      "zoom",
      (event: d3zoom.D3ZoomEvent<HTMLElement, unknown>) => {
        console.log(event.sourceEvent);
        if (event.sourceEvent && event.sourceEvent.target !== elem.current)
          return;

        const { x, y, k } = event.transform;
        setTransform({ x, y, scale: k });

        onMove?.();
      },
    );
  }, []);
};
