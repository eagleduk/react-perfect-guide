import { useEffect, useState } from "react";
import Places from "./Places.jsx";
import { getAbailablePlaces } from "../http.js";
import { sortPlacesByDistance } from "../loc.js";
import Error from "../Error.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [availablePlace, setAvailablePlace] = useState([]);

  useEffect(() => {
    async function getPlaces() {
      setIsLoading(true);
      setError(null);
      try {
        const places = await getAbailablePlaces();
        navigator.geolocation.getCurrentPosition((position) => {
          const data = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude
          );
          setAvailablePlace(data);
          setIsLoading(false);
        });
      } catch (error) {
        setIsLoading(false);
        setError({ message: error.message });
      }
    }

    getPlaces();
  }, []);

  if (error) {
    return <Error title="Fetch Error" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlace}
      isLoading={isLoading}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
