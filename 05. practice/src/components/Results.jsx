import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ inputValues }) {
  const results = calculateInvestmentResults(inputValues);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result, index) => {
          const v =
            inputValues.initialInvestment +
            result.annualInvestment * (index + 1);
          return (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(result.valueEndOfYear - v)}</td>
              <td>{formatter.format(v)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
