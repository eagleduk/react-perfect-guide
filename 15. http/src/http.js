export async function getAbailablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  if (!response.ok) {
    throw new Error("fetch fail");
  }

  const data = await response.json();

  return data.places;
}

export async function getUserPlaces() {
  const response = await fetch("http://localhost:3000/user-places");
  if (!response.ok) {
    throw new Error("fetch fail");
  }

  const data = await response.json();

  return data.places;
}

export async function updateUserPlace(result) {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({ places: result }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) throw new Error("Update fail");

  const data = await response.json();
  return data;
}
