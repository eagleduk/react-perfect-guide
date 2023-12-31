import { useEffect } from "react";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import { getToken } from "../util/auth";

function RootLayout() {
  // const navigation = useNavigation();
  const data = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!data) return;

    const { date } = data;

    const duration = Date.now() - date;

    if (duration >= 10 * 1000)
      submit(null, { action: "/logout", method: "POST" });

    setTimeout(() => {
      submit(null, { action: "/logout", method: "POST" });
    }, 10 * 1000 - duration);
  }, [data, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;

export function loader() {
  return getToken();
}
