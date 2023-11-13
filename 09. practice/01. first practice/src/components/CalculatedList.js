import CalculatedItem from "./CalculatedItem";

import styles from "./CalculatedList.module.css";

export default function CalculatedList(props) {
  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.yearlyData.map((data) => {
          return <CalculatedItem yearlyData={data} key={data.year} />;
        })}
      </tbody>
    </table>
  );
}
