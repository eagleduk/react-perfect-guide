import styles from "./ErrorModal.module.css";
import Button from "./ui/Button";
import Card from "./ui/Card";

export default function ErrorModal(props) {
  return (
    <div className={styles.backdrop}>
      <Card className={styles.modal}>
        <div className={styles.header}>
          <h2>Invalid input</h2>
        </div>
        <div className={styles.content}>{props.errorMessage}</div>
        <div className={styles.actions}>
          <Button handleClickEvent={props.onModalDisplay}>Okay</Button>
        </div>
      </Card>
    </div>
  );
}
