import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../../components/EventItem";

function EventDetail() {
  const data = useRouteLoaderData("event-detail");
  const event = data.event;
  return <EventItem event={event} />;
}

export default EventDetail;

export async function loader({ params }) {
  const id = params.id;
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw json(
      { message: "Could not fetch event information" },
      { status: 500 }
    );
  } else {
    return response;
  }
}

export async function action({ request, params }) {
  const id = params.id;
  const response = await fetch("http://localhost:8080/events/" + id, {
    method: request.method,
  });
  if (!response.ok) {
    throw json({ message: "Could not fetch event delete" }, { status: 500 });
  }
  return redirect("/events");
}
