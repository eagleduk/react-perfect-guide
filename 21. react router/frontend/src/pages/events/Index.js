import { Outlet } from "react-router-dom";
import EventsNavigation from "../../components/EventsNavigation";

function Index() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}

export default Index;
