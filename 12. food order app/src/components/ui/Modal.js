import styles from "./Modal.module.css";

function Modal(props) {
  return (
    <div>
      <div className={styles.backdrop} />
      <div className={styles.modal}>{props.children}</div>
    </div>
  );
}

export default Modal;
