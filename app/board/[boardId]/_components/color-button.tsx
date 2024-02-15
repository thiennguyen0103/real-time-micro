"use client";

import { colorToCss } from "@/lib/utils";
import { Color } from "@/types/canvas";

interface ColorButtonProps {
  onClick: (color: Color) => void;
  color: Color;
}

const ColorButton = ({ color, onClick }: ColorButtonProps) => {
  return (
    <button
      className="flex h-8 w-8 items-center justify-center transition hover:opacity-75"
      onClick={() => onClick(color)}
    >
      <div
        className="h-8 w-8 rounded-md border border-neutral-300"
        style={{
          background: colorToCss(color),
        }}
      />
    </button>
  );
};

export default ColorButton;
