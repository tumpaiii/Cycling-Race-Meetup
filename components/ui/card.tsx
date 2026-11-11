import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export default function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn("rounded-xl border border-black/10 bg-white text-[#171B19]", className)}
      {...props}
    />
  );
}
