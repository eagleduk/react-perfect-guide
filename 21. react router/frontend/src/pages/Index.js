import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function Index() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Index;
