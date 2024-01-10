import { useRef, useState, useCallback, useEffect } from "react";

import Places from "./components/Places.jsx";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import AvailablePlaces from "./components/AvailablePlaces.jsx";
import { getUserPlaces, updateUserPlace } from "./http.js";
import Error from "./Error.jsx";

function App() {
  const selectedPlace = useRef();

  const [isLoading, setIsLoading] = useState(false);
  const [userPlaces, setUserPlaces] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  const [error, setError] = useState(null);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    async function getPlaces() {
      setIsLoading(true);
      setFetchError(null);
      try {
        const places = await getUserPlaces();
        setUserPlaces(places);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setFetchError({ message: error.message });
      }
    }

    getPlaces();
  }, []);

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });

    try {
      await updateUserPlace([selectedPlace, ...userPlaces]);
    } catch (error) {
      setError({ message: error.message });
      setUserPlaces(userPlaces);
    }
  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    setUserPlaces((prevPickedPlaces) => {
      return prevPickedPlaces.filter(
        (place) => place.id !== selectedPlace.current.id
      );
    });

    try {
      await updateUserPlace(
        userPlaces.filter((place) => place.id !== selectedPlace.current.id)
      );
    } catch (error) {
      setError({ message: error.message });
      setUserPlaces(userPlaces);
    }

    setModalIsOpen(false);
  }, []);

  return (
    <>
      <Modal open={error} onClose={() => setError(null)}>
        {error && (
          <Error
            title="title"
            message={error.message}
            onConfirm={() => setError(null)}
          />
        )}
      </Modal>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
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
        {fetchError && <Error title="Error" message={fetchError.message} />}
        {!fetchError && (
          <Places
            title="I'd like to visit ..."
            fallbackText="Select the places you would like to visit below."
            places={userPlaces}
            isLoading={isLoading}
            onSelectPlace={handleStartRemovePlace}
          />
        )}

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
