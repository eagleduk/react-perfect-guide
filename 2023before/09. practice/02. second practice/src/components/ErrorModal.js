import styles from "./ErrorModal.module.css";
import Button from "./ui/Button";
import Card from "./ui/Card";

export default function ErrorModal(props) {
  return (
    <div>
      <div
        className={styles.backdrop}
        onClick={() => props.onModalDisplay(false)}
      />
      <Card className={styles.modal}>
        <div className={styles.header}>
          <h2>Invalid input</h2>
        </div>
        <div className={styles.content}>{props.errorMessage}</div>
        <div className={styles.actions}>
          <Button type="button" handleClickEvent={props.onModalDisplay}>
            Okay
          </Button>
        </div>
      </Card>
    </div>
  );
}
