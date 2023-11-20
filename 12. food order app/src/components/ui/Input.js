import styles from "./Input.module.css";

function Input(props) {
  return (
    <div className={styles.input}>
      <label>{props.label}</label>
      <input
        type={props.type}
        value={props.value}
        onChange={(event) => props.onChange(event.target.value)}
      />
    </div>
  );
}
export default Input;
