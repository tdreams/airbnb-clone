"use client";

import { cn } from "@/lib/utils";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}: ButtonProps) => {
  return (
    <button
      className={cn(
        " relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition  w-full",
        outline ? "bg-white" : "bg-gradient-to-r from-rose-400 to-rose-700",
        outline ? "border-black" : "bg-gradient-to-r from-rose-400 to-rose-700",
        outline ? "text-black" : "text-white",
        small ? "text-sm" : "text-base",
        small ? "p-1" : "py-3",
        small ? "font-light" : "font-semibold",
        small ? "border-[1px]" : "border-2"
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {label}
    </button>
  );
};

export default Button;
