import { useState } from "react";

import style from "./index.module.css";

import logo from "./assets/investment-calculator-logo.png";
import CalculateForm from "./components/CalculateForm";
import CalculatedList from "./components/CalculatedList";

function App() {
  const [yearlyData, setYearlyData] = useState([]);

  return (
    <div>
      <header className={style.header}>
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <CalculateForm onYearDataChange={setYearlyData} />

      <CalculatedList yearlyData={yearlyData} />
    </div>
  );
}

export default App;
