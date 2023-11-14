import styles from "./Button.module.css";

export default function Button(props) {
  const onClickEvent = props.handleClickEvent
    ? () => props.handleClickEvent(false)
    : null;
  return (
    <button onClick={onClickEvent} className={styles.button}>
      {props.children}
    </button>
  );
}
