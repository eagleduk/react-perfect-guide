import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <div
          className={styles.backdrop}
          onClick={() => props.onDisplay(false)}
        />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <div className={styles.modal}>{props.children}</div>,
        document.getElementById("modal")
      )}
    </>
  );
}

export default Modal;
