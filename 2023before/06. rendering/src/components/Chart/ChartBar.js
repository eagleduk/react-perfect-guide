import "./ChartBar.css";

export default function ChartBar(props) {
  const height =
    props.max === 0 ? "0%" : Math.floor((props.value / props.max) * 100) + "%";
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: height }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}
