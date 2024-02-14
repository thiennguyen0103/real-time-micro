"use client";

import { pointerEventToCanvasPoint } from "@/lib/utils";
import {
  useCanRedo,
  useCanUndo,
  useHistory,
  useMutation,
} from "@/liveblocks.config";
import { Camera, CanvasMode, CanvasState } from "@/types/canvas";
import { PointerEvent, WheelEvent, useCallback, useState } from "react";
import CursorsPresence from "./cursors-presence";
import Info from "./info";
import Participants from "./participants";
import Toolbar from "./toolbar";

interface CanvasProps {
  boardId: string;
}

const Canvas = ({ boardId }: CanvasProps) => {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  });

  const [camera, setCamera] = useState<Camera>({ x: 0, y: 0 });

  const history = useHistory();
  const canUndo = useCanUndo();
  const canRedo = useCanRedo();

  const onWheel = useCallback((event: WheelEvent<SVGSVGElement>) => {
    setCamera((camera) => ({
      x: camera.x - event.deltaX,
      y: camera.y - event.deltaY,
    }));
  }, []);

  const onPointerMove = useMutation(
    ({ setMyPresence }, event: PointerEvent<SVGSVGElement>) => {
      event.preventDefault();

      const current = pointerEventToCanvasPoint(event, camera);
      setMyPresence({ cursor: current });
    },
    [],
  );

  const onPointerLeave = useMutation(
    ({ setMyPresence }, event: PointerEvent<SVGSVGElement>) => {
      event.preventDefault();

      setMyPresence({ cursor: null });
    },
    [],
  );

  return (
    <main className="relative h-full w-full touch-none bg-neutral-100">
      <Info boardId={boardId} />
      <Participants />
      <Toolbar
        canvasState={canvasState}
        setCanvasState={setCanvasState}
        canRedo={canRedo}
        canUndo={canUndo}
        redo={history.redo}
        undo={history.undo}
      />
      <svg
        className="h-screen w-screen"
        onWheel={onWheel}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
      >
        <g>
          <CursorsPresence />
        </g>
      </svg>
    </main>
  );
};

export default Canvas;
