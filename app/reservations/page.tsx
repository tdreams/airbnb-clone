import EmptyState from "@/components/EmptyState";

import getCurrentUser from "@/actions/getCurrentUser";
import getReservations from "@/actions/getReservation";
import ReservationClient from "./ReservationClient";

const reservationsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthaurized" subtitle="Please login" />;
  }

  const reservation = await getReservations({
    authorId: currentUser.id,
  });

  if (reservation.length === 0) {
    return (
      <EmptyState
        title="No reservation found"
        subtitle="Looks like you have no reservations on your properties"
      />
    );
  }

  return (
    <ReservationClient reservations={reservation} currentUser={currentUser} />
  );
};

export default reservationsPage;
