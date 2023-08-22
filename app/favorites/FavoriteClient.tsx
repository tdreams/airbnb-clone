"use client";

import Container from "@/components/Container";
import Heading from "@/components/Heading";
import ListinCard from "@/components/listings/ListinCard";
import { SafeListing, SafeUser } from "@/types";

interface FavoriteClientProps {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
}

const FavoriteClient = ({ listings, currentUser }: FavoriteClientProps) => {
  return (
    <Container>
      <Heading title="Favorites" subtitle="List of places you have favorited" />

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {listings.map((listing) => (
          <ListinCard
            key={listing.id}
            data={listing}
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default FavoriteClient;
