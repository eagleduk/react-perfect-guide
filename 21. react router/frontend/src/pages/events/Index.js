import { Outlet } from "react-router-dom";
import EventsNavigation from "../../components/EventsNavigation";

function Index() {
  return (
    <>
      <EventsNavigation />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Index;
