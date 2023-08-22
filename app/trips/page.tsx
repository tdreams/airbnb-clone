import EmptyState from "@/components/EmptyState";
import getCurrentUser from "@/actions/getCurrentUser";
import getReservations from "@/actions/getReservation";
import TripsClient from "./TripsClient";

const tripsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthauthorized" subtitle="Please login" />;
  }

  const reservations = await getReservations({
    userId: currentUser.id,
  });

  if (reservations.length === 0) {
    return (
      <EmptyState
        title="No trips found"
        subtitle="Looks like you have not reserved any trips"
      />
    );
  }

  return <TripsClient reservations={reservations} currentUser={currentUser} />;
};

export default tripsPage;
