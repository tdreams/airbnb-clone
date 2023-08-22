import EmptyState from "@/components/EmptyState";
import getCurrentUser from "@/actions/getCurrentUser";
import PropertiesClient from "./PropertiesClient";
import getListings from "@/actions/getListings";

const tripsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthauthorized" subtitle="Please login" />;
  }

  const listings = await getListings({
    userId: currentUser.id,
  });

  if (listings.length === 0) {
    return (
      <EmptyState
        title="No properties found"
        subtitle="Looks like you have not reserved any trips"
      />
    );
  }

  return <PropertiesClient listings={listings} currentUser={currentUser} />;
};

export default tripsPage;
