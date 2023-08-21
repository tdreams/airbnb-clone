"use client";

import useCountries from "@/hooks/useContries";
import { SafeUser } from "@/types";
import { IconType } from "react-icons";
import Avatar from "../Avatar";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import ListingCategory from "./ListingCategory";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../Map"), {
  ssr: false,
});

interface ListingInfoProps {
  user: SafeUser;
  description: string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
  locationValue: string;
}

const ListingInfo = ({
  user,
  description,
  guestCount,
  roomCount,
  bathroomCount,
  category,
  locationValue,
}: ListingInfoProps) => {
  const { getByValue } = useCountries();

  const coordinates = getByValue(locationValue)?.latlng;
  return (
    <div className="col-span-4 flex flex-col gap-4">
      <div className="text-xl font-semibold flex flex-row items-center gap-2 justify-between">
        <div>Hosted by {user?.name}</div>
        <Avatar src={user?.image} />
      </div>
      <div
        className={cn(
          "flex flex-row items-center gap-1 font-medium text-neutral-800 "
        )}
      >
        <div>
          {guestCount === 1 ? guestCount + "guest" : guestCount + " guests"}
        </div>
        <div className="list-disc">
          <li className="ml-4 mb-1 " />
        </div>
        <div>{roomCount === 1 ? roomCount + "room" : roomCount + " rooms"}</div>
        <div className="list-disc">
          <li className="ml-4 mb-1 " />
        </div>
        <div>
          {bathroomCount === 1
            ? bathroomCount + "bathroom"
            : bathroomCount + " bathrooms"}
        </div>
      </div>
      <Separator />
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category.label}
          description={category.description}
        />
      )}
      <Separator />
      <div className="text-lg font-light text-neutral-500">{description}</div>
      <Separator />
      <Map center={coordinates} />
    </div>
  );
};

export default ListingInfo;
