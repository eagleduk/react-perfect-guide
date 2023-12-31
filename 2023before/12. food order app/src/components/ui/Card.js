import styles from "./Card.module.css";

function Card(props) {
  const className = `${styles.card} ${props.className}`;
  return <div className={className}>{props.children}</div>;
}

export default Card;
