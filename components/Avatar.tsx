"use client";
import React from "react";
import { Avatar as Avatarshad, AvatarImage } from "@/components/ui/avatar";

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar = ({ src }: AvatarProps) => {
  return (
    <div>
      <Avatarshad className="w-8 h-8">
        <AvatarImage src={src || "/images/placeholder.jpg"} />
        {/*  TODO:Do the fullback avatar with clerk auth */}
      </Avatarshad>
    </div>
  );
};

export default Avatar;
