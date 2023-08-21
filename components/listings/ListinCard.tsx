"use client";
import React, { useCallback, useMemo } from "react";

import useCountries from "@/hooks/useContries";
import { SafeListing, SafeUser } from "@/types";
import { Listing, Reservation } from "@prisma/client";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import HeartButton from "../HeartButton";
import Button from "../Button";

interface ListinCardProps {
  data: SafeListing;
  reservation?: Reservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
}

const ListinCard = ({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = "",
  currentUser,
}: ListinCardProps) => {
  const router = useRouter();
  const { getByValue } = useCountries();
  const location = getByValue(data.locationValue);

  const handleCancel = useCallback(() => {
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      if (disabled) {
        return;
      }
      onAction?.(actionId);
    };
  }, [onAction, actionId, disabled]);

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }
    return data.price;
  }, [reservation, data.price]);

  const reservationDate = useMemo(() => {
    if (!reservation) {
      return null;
    }
    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);

    return `${format(start, "PP")} - ${format(end, "PP")}`;
  }, [reservation]);

  return (
    <div
      className="col-span-1 cursor-pointer group "
      onClick={() => router.push(`/listings/${data.id}`)}
    >
      <Card className="overflow-hidden">
        <div className="aspect-square w-full relative  ">
          <Image
            alt="Listing"
            src={data.imageSrc}
            className="object-cover h-full w-full group-hover:scale-110 transition"
            fill
          />
          <div className="absolute top-3 right-3">
            <HeartButton listingId={data.id} currentUser={currentUser} />
          </div>
        </div>
      </Card>
      <CardTitle className="font-semibold text-lg">
        {location?.region}, {location?.label}
      </CardTitle>
      <CardDescription className="font-light text-muted-foreground">
        {reservationDate || data?.category}
      </CardDescription>
      <div className="flex flex-row items-center gap-1">
        <CardDescription className="font-bold text-neutral-950">
          $<span className="text-[1rem]">{price}</span>
        </CardDescription>
        {!reservation && <div className="font-light">night</div>}
        {onAction && actionLabel && (
          <Button
            disabled={disabled}
            small
            label={actionLabel}
            onClick={handleCancel}
          />
        )}
      </div>
    </div>
  );
};

export default ListinCard;
