import { useState } from "react";

import styles from "./CalculateForm.module.css";

export default function CalculateForm(props) {
  const [current, setCurrent] = useState("10000");
  const [yearly, setYearly] = useState("1200");
  const [expected, setExpected] = useState("5");
  const [duration, setDuration] = useState("15");

  const handleCurrentChange = (event) => setCurrent(event.target.value);
  const handleYearlyChange = (event) => setYearly(event.target.value);
  const handleExpectedChange = (event) => setExpected(event.target.value);
  const handleDurationChange = (event) => setDuration(event.target.value);

  const calculateHandler = (event) => {
    event.preventDefault();

    let currentSavings = +current;
    const yearlyContribution = +yearly;
    const expectedReturn = +expected / 100;
    const du = +duration;

    const temp = [];
    for (let i = 0; i < du; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      temp.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        totalInterest:
          yearlyInterest +
          (temp[i - 1] !== undefined ? temp[i - 1].totalInterest : 0),
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    props.onYearDataChange(temp);
  };

  const handleResetEvent = (event) => {
    props.onYearDataChange([]);
    setCurrent("10000");
    setYearly("1200");
    setExpected("5");
    setDuration("15");
  };

  return (
    <form className={styles.form} onSubmit={calculateHandler}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={handleCurrentChange}
            value={current}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={handleYearlyChange}
            value={yearly}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={handleExpectedChange}
            value={expected}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={handleDurationChange}
            value={duration}
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          type="reset"
          className={styles.buttonAlt}
          onClick={handleResetEvent}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
}
