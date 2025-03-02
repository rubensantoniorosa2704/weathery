import React from "react";

function SearchBar({ location, setLocation, searchLocation }) {
  return (
    <div className="search">
      <input
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Pesquise sua cidade"
        type="text"
      />
    </div>
  );
}

export default SearchBar;
