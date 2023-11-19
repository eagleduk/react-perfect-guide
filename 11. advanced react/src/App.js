import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/context/auth.context";

function App() {
  const auth = useContext(AuthContext);
  return (
    <>
      <MainHeader />
      <main>
        {auth.isLoggedIn ? <Home onLogout={auth.onLogout} /> : <Login />}
      </main>
    </>
  );
}

export default App;
