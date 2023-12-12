import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Index from "./pages/Index";
import EventDetail, {
  loader as eventDetailLoader,
  action as eventDetailAction,
} from "./pages/events/EventDetail";
import NewEvent from "./pages/events/NewEvent";
import EditEvent from "./pages/events/EditEvent";
import Event from "./pages/events/Index";
import Events, { loader as eventsLoader } from "./pages/events/Events";
import Error from "./pages/Error";
import { action as eventAction } from "./components/EventForm";
// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "events",
        element: <Event />,
        children: [
          {
            index: true,
            element: <Events />,
            loader: eventsLoader,
          },
          {
            path: "new",
            element: <NewEvent />,
            action: eventAction,
          },
          {
            path: ":id",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetail />,
                action: eventDetailAction,
              },
              {
                path: "edit",
                element: <EditEvent />,
                action: eventAction,
              },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
