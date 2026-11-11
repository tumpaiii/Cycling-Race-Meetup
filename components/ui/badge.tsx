import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
  variant?: "default" | "outline";
}

export default function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        variant === "default" && "bg-[#DFFF36] text-[#171B19]",
        variant === "outline" && "border border-current bg-transparent",
        className
      )}
      {...props}
    />
  );
}
