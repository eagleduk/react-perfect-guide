import React, { useState } from "react";
import AddUser from "./components/AddUser";
import UsersList from "./components/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div>
      <AddUser addUserEvent={setUsers} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
