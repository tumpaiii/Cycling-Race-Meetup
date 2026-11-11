import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "default" | "outline" | "ghost";
}

export default function Button({ className, variant = "default", type = "button", ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variant === "default" && "bg-[#171B19] text-white hover:bg-[#303833]",
        variant === "outline" && "border border-[#171B19] bg-transparent text-[#171B19] hover:bg-[#f2f2ed]",
        variant === "ghost" && "bg-transparent text-[#171B19] hover:bg-[#f2f2ed]",
        className
      )}
      {...props}
    />
  );
}
