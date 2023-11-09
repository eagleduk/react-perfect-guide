import ChartBar from "./ChartBar";

import "./Chart.css";

export default function Chart(props) {
  const monthData = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  props.items.forEach((item) => {
    const index = item.date.getMonth();
    monthData[index].value += item.amount;
  });

  const valueArr = monthData.map((data) => data.value);
  const maxValue = Math.max(...valueArr);

  return (
    <div className="chart">
      {monthData.map((data) => {
        return (
          <ChartBar
            label={data.label}
            value={data.value}
            key={data.label}
            max={maxValue}
          />
        );
      })}
    </div>
  );
}
