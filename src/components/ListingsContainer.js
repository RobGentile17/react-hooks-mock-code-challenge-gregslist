import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDeleteListing, onUpdateListing }) {
  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard 
            key={listing.id}
            listing={listing}
            onDeleteListing={onDeleteListing}
            onUpdateListing={onUpdateListing}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;