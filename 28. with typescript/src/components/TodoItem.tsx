import Todo from "../model/Todo";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{item: Todo, onRemoveTodo: (i:number) => void}> = (props) => {

    const handleListItemClickEvent = (i: number) => {
        props.onRemoveTodo(i);
    }
    
    return <li className={classes.item} onClick={() => handleListItemClickEvent(props.item.id)}>{props.item.text}</li>
}

export default TodoItem;