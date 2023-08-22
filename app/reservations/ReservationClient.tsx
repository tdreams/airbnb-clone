"use client";

import Container from "@/components/Container";
import Heading from "@/components/Heading";
import ListinCard from "@/components/listings/ListinCard";
import { toast } from "@/components/ui/use-toast";
import { SafeReservation, SafeUser } from "@/types";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

interface ReservationClientProps {
  reservations: SafeReservation[];
  currentUser: SafeUser;
}

const ReservationClient = ({
  reservations,
  currentUser,
}: ReservationClientProps) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState("");
  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id);
      axios
        .delete(`/api/reservations/${id}`)
        .then(() => {
          toast({
            variant: "destructive",
            description: "Canceled the reservation successfully",
          });
          router.refresh();
        })
        .catch((e) => {
          toast({
            variant: "destructive",
            description: "Something went wrong.",
          });
        })
        .finally(() => {
          setDeletingId("");
        });
    },
    [router]
  );
  return (
    <Container>
      <Heading title="Reservation" subtitle="Booking on your properties" />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {reservations.map((reservation) => (
          <ListinCard
            key={reservation.id}
            data={reservation.listing}
            reservation={reservation}
            actionId={reservation.id}
            onAction={onCancel}
            disabled={deletingId === reservation.id}
            actionLabel="Cancel guest reservation"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default ReservationClient;
