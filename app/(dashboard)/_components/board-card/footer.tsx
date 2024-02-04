import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import React from "react";

interface FooterProps {
  title: string;
  authorLabel: string;
  createdAtLabel: string;
  isFavorite: boolean;
  onClick: () => void;
  disabled: boolean;
}

const Footer = ({
  authorLabel,
  createdAtLabel,
  disabled,
  isFavorite,
  onClick,
  title,
}: FooterProps) => {
  return (
    <div className="relative bg-white p-3">
      <p className="max-w-[calc(100% - 20px)] truncate text-[13px]">{title}</p>
      <p className="truncate text-[11px] text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
        {authorLabel}, {createdAtLabel}
      </p>
      <button
        className={cn(
          "absolute right-3 top-3 text-muted-foreground opacity-0 transition hover:text-yellow-400 group-hover:opacity-100",
          disabled && "cursor-not-allowed opacity-75",
        )}
      >
        <Star
          className={cn(
            "h-4 w-4",
            isFavorite && "fill-yellow-400 text-yellow-400",
          )}
        />
      </button>
    </div>
  );
};

export default Footer;
