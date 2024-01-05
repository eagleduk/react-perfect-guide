import { useRef, useState } from "react";

import Places from "./components/Places.jsx";
import { AVAILABLE_PLACES } from "./data.js";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import { useEffect } from "react";
import { sortPlacesByDistance } from "./loc.js";

function App() {
  const savedPlace = JSON.parse(localStorage.getItem("saved")) || [];
  const localPlace = AVAILABLE_PLACES.filter(
    ({ id }) => savedPlace.indexOf(id) > -1
  );

  const selectedPlace = useRef();

  const [isModal, setIsModal] = useState(false);
  const [sortedPlace, setSortedPlace] = useState([]);
  const [pickedPlaces, setPickedPlaces] = useState(localPlace);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const result = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      );
      setSortedPlace(result);
    });
  }, []);

  function handleStartRemovePlace(id) {
    setIsModal(true);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setIsModal(false);
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    const savedPlace = localStorage.getItem("saved");
    if (!savedPlace || savedPlace.indexOf(id) === -1) {
      localStorage.setItem(
        "saved",
        JSON.stringify([id, ...(JSON.parse(savedPlace) || [])])
      );
    }
  }

  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    setIsModal(false);

    const savedPlace = localStorage.getItem("saved");
    localStorage.setItem(
      "saved",
      JSON.stringify(
        (JSON.parse(savedPlace) || []).filter(
          (id) => id !== selectedPlace.current
        )
      )
    );
  }

  return (
    <>
      <Modal isOpen={isModal}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={sortedPlace}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
