import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [inputValues, setInputValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 300,
    expectedReturn: 5.5,
    duration: 10,
  });

  function onChangeInputValuesEvent(id, value) {
    setInputValues((currentValues) => ({ ...currentValues, [id]: value }));
  }

  return (
    <>
      <Header />
      <UserInput
        inputValues={inputValues}
        onChange={onChangeInputValuesEvent}
      />
      <Results inputValues={inputValues} />
    </>
  );
}

export default App;
