export default function CalculatedItem({
  yearlyData: { year, savingsEndOfYear, yearlyInterest, totalInterest },
}) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const numberFormat = (value) => formatter.format(value);
  return (
    <tr>
      <td>{year}</td>
      <td>{`$${numberFormat(savingsEndOfYear)}`}</td>
      <td>{`$${numberFormat(yearlyInterest)}`}</td>
      <td>{`$${numberFormat(totalInterest)}`}</td>
      <td>{`$${numberFormat(savingsEndOfYear - totalInterest)}`}</td>
    </tr>
  );
}
