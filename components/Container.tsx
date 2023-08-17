"use client";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}
const Container = ({ children }: ContainerProps) => {
  return (
    <div>
      <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
        {children}
      </div>
    </div>
  );
};

export default Container;
