"use client";

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

import React from "react";

const MenuItem = ({ onClick, label }: MenuItemProps) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <div
      className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
      onClick={handleClick}
    >
      {label}
    </div>
  );
};

export default MenuItem;
