"use client";

import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}

const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {
  const router = useRouter();
  const { mutate, pending } = useApiMutation(api.board.create);

  const onCreate = () => {
    mutate({
      orgId: orgId,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board created");
        router.push(`/board/${id}`);
      })
      .catch(() => {
        toast.error("Failed to create board");
      });
  };
  return (
    <button
      disabled={pending || disabled}
      className={cn(
        "col-span-1 flex aspect-[100/127] flex-col items-center justify-center rounded-lg bg-orange-400 py-6 hover:bg-orange-500",
        (pending || disabled) &&
          "cursor-not-allowed opacity-75 hover:bg-orange-400",
      )}
      onClick={onCreate}
    >
      <Plus className="h-12 w-12 stroke-1 text-white" />
      <p className="text-xs font-light text-white">New board</p>
    </button>
  );
};

export default NewBoardButton;
