import styles from "./Card.module.css";

export default function Card(props) {
  const className = `${styles.card} ${props.className}`;
  return <div className={className}>{props.children}</div>;
}
