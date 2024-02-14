import { useSelf, useStorage } from "@/liveblocks.config";
import { Layer, XYWH } from "@/types/canvas";
import { shallow } from "@liveblocks/client";

const boundingBox = (layer: Layer[]): XYWH | null => {
  const first = layer[0];

  if (!first) {
    return null;
  }

  let x1 = first.x;
  let x2 = first.x + first.width;
  let y1 = first.y;
  let y2 = first.y + first.height;

  for (let i = 1; i < layer.length; i++) {
    const { x, y, width, height } = layer[i];

    if (x1 > x) {
      x1 = x;
    }

    if (x2 < x + width) {
      x2 = x + width;
    }

    if (y1 > y) {
      y1 = y;
    }

    if (y2 < y + height) {
      y2 = y + height;
    }
  }

  return {
    x: x1,
    y: y1,
    width: x2 - x1,
    height: y2 - y1,
  };
};

export const useSelectionBounds = () => {
  const selection = useSelf((me) => me.presence.selection);

  return useStorage((root) => {
    const selectedLayers = selection
      .map((layerId) => root.layers.get(layerId)!)
      .filter(Boolean);
    return boundingBox(selectedLayers);
  }, shallow);
};
