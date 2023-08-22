"use client";

import Container from "@/components/Container";
import Heading from "@/components/Heading";
import ListinCard from "@/components/listings/ListinCard";
import { toast } from "@/components/ui/use-toast";
import { SafeUser, SafeReservation } from "@/types";
import axios from "axios";
import { error } from "console";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

interface TripsClientProps {
  reservations: SafeReservation[];
  currentUser: SafeUser | null;
}

const TripsClient = ({ reservations, currentUser }: TripsClientProps) => {
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
            description: "Reservations canceled successfully",
          });
          router.refresh();
        })
        .catch((e) => {
          toast({
            variant: "destructive",
            description: "Something went wrong",
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
      <Heading
        title="Trips"
        subtitle="Where you'vr been and where you're going"
      />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {reservations.map((reservation) => (
          <ListinCard
            key={reservation.id}
            data={reservation.listing}
            reservation={reservation}
            actionId={reservation.id}
            onAction={onCancel}
            disabled={deletingId === reservation.id}
            actionLabel="Cancel reservation"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default TripsClient;
