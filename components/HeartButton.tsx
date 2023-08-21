"use client";

import useFavorite from "@/hooks/useFavorite";
import { cn } from "@/lib/utils";
import { SafeUser } from "@/types";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface HeartButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}

const HeartButton = ({ listingId, currentUser }: HeartButtonProps) => {
  const { hasFavorited, toggleFavorite } = useFavorite({
    listingId,
    currentUser,
  });
  return (
    <div
      className="relative hover:opacity-80 transition cursor-pointer"
      onClick={toggleFavorite}
    >
      <AiOutlineHeart
        size={28}
        className="fill-white absolute -right-[2px] -top-[2px] "
      />

      <AiFillHeart
        size={24}
        className={cn(hasFavorited ? "fill-rose-700" : "fill-neutral-500/70")}
      />
    </div>
  );
};

export default HeartButton;
