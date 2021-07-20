import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListing] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then(setListing)
  }, []);

  function handleRemoveListing(id) {
    const newListings = listings.filter((listing) => listing.id !== id);
    setListing(newListings);
  }


  const showListings = listings.filter((listing) =>
  listing.description.toLowerCase().includes(search.toLowerCase())
);

  return (
    <div className="app">
      <Header 
        onSearch={setSearch}
      />
      <ListingsContainer 
        listings={showListings}
        onDeleteListing={handleRemoveListing}
      />
    </div>
  );
}

export default App;
