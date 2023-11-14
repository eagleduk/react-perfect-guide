import styles from "./UsersList.module.css";
import Card from "./ui/Card";

export default function UsersList(props) {
  return (
    <div>
      {props.users.length > 0 && (
        <Card className={styles.users}>
          <ul>
            {props.users.map((user, index) => {
              return (
                <li key={index}>
                  {user.name} ({user.age} years old)
                </li>
              );
            })}
          </ul>
        </Card>
      )}
    </div>
  );
}
