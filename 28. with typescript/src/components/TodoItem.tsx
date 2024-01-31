import Todo from "../model/Todo";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{item: Todo, onRemoveTodo: () => void}> = (props) => {

    const handleListItemClickEvent = (i: number) => {
        props.onRemoveTodo();
    }
    
    return <li className={classes.item} onClick={props.onRemoveTodo}>{props.item.text}</li>
}

export default TodoItem;