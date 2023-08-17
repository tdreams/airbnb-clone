"use client";

import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import { IconType } from "react-icons";
import qs from "query-string";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}

const CategoryBox = ({ icon: Icon, label, selected }: CategoryBoxProps) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuerry = {}; //first defined empty querry
    if (params) {
      currentQuerry = qs.parse(params.toString());
    }

    const updatedQuerry: any = {
      ...currentQuerry,
      category: label, //add new category
    };

    if (params?.get("category") === label) {
      delete updatedQuerry.category;
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuerry,
      },
      { skipNull: true }
    );
    router.push(url);
  }, [label, params, router]);
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transtion cursor-pointer",
        selected
          ? "from border-b-neutral-500 to border-neutral-800 transition ease-in-out duration-700"
          : "from border-neutral-800 to border-transparent",
        selected
          ? "text-neutral-800"
          : "text-neutral-500 ease-in-out duration-700"
      )}
      onClick={handleClick}
    >
      <Icon size={26} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};

export default CategoryBox;
