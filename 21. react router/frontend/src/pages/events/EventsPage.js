import { Link } from "react-router-dom";

const DUMMYEVENTS = [
  {
    id: "e1",
    text: "Events 1",
  },
  {
    id: "e2",
    text: "Events 2",
  },
];

function EventsPage() {
  return (
    <>
      <ul>
        {DUMMYEVENTS.map((event) => {
          return (
            <li key={event.id}>
              <Link to={`/events/${event.id}`}>{event.text}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default EventsPage;
