import { useState } from "react";

import styles from "./AddUser.module.css";
import Button from "./ui/Button";
import Card from "./ui/Card";
import ErrorModal from "./ErrorModal";

const INITVALUE = {
  name: "",
  age: "",
};

export default function AddUser(props) {
  const [invalid, setInvalid] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [user, setUser] = useState(INITVALUE);

  const handleInputChangeEvent = (target, value) => {
    setUser((current) => {
      return { ...current, [target]: value };
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (user.name.trim().length === 0 || user.age.trim().length === 0) {
      setInvalid(true);
      setErrorMessage("Please enter a valid name and age (non-empty values).");
      return;
    }

    if (+user.age < 0 || +user.age > 100) {
      setInvalid(true);
      setErrorMessage("Please enter a valid age (>0 or <100).");
      return;
    }

    props.addUserEvent((current) => {
      return [user, ...current];
    });
    setUser(INITVALUE);
  };

  return (
    <div>
      {invalid && (
        <ErrorModal errorMessage={errorMessage} onModalDisplay={setInvalid} />
      )}

      <Card className={styles.input}>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label>Username</label>
            <input
              value={user.name}
              onChange={(event) =>
                handleInputChangeEvent("name", event.target.value)
              }
              type="text"
            />
          </div>
          <div>
            <label>Age (Years)</label>
            <input
              value={user.age}
              onChange={(event) =>
                handleInputChangeEvent("age", event.target.value)
              }
              type="number"
            />
          </div>
          <div>
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
