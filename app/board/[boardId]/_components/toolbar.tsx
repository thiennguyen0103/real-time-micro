import {
  Circle,
  MousePointer2,
  Pencil,
  Redo2,
  Square,
  StickyNote,
  Type,
  Undo2,
} from "lucide-react";
import ToolButton from "./tool-button";

const Toolbar = () => {
  return (
    <div className="absolute left-2 top-1/2 flex -translate-y-1/2 flex-col gap-y-4">
      <div className="flex flex-col items-center gap-y-1 rounded-md bg-white p-1.5 shadow-md">
        <ToolButton
          icon={MousePointer2}
          label="Select"
          onClick={() => {}}
          isActive={false}
        />
        <ToolButton
          icon={Type}
          label="Text"
          onClick={() => {}}
          isActive={false}
        />
        <ToolButton
          icon={StickyNote}
          label="Sticky Note"
          onClick={() => {}}
          isActive={false}
        />
        <ToolButton
          icon={Square}
          label="Rectangle"
          onClick={() => {}}
          isActive={false}
        />
        <ToolButton
          icon={Circle}
          label="Ellipse"
          onClick={() => {}}
          isActive={false}
        />
        <ToolButton
          icon={Pencil}
          label="Pen"
          onClick={() => {}}
          isActive={false}
        />
      </div>
      <div className="flex flex-col items-center gap-y-1 rounded-md bg-white p-1.5 shadow-md">
        <ToolButton
          icon={Undo2}
          label="Undo"
          onClick={() => {}}
          isDisabled={false}
        />
        <ToolButton
          icon={Redo2}
          label="Redo"
          onClick={() => {}}
          isDisabled={true}
        />
      </div>
    </div>
  );
};

Toolbar.Skeleton = function InfoSkeleton() {
  return (
    <div className="absolute left-2 top-1/2 flex h-[360px] w-[52px] -translate-y-1/2 flex-col gap-y-4 rounded-md bg-white shadow-md" />
  );
};

export default Toolbar;
