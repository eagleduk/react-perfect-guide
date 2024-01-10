import { useEffect, useState } from "react";
import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlace, setAbailablePlace] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/places")
      .then((response) => response.json())
      .then((data) => setAbailablePlace(data.places));
  }, []);

  return (
    <Places
      title="Available Places"
      places={availablePlace}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
