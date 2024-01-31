import { FormEvent, useContext, useRef } from "react";
import classes from "./NewTodo.module.css";
import { TodoContext } from "../store/TodoContext";

const NewTodo: React.FC = () => {
    const todoCtx = useContext(TodoContext);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmitEvent = (event: FormEvent) => {
        event.preventDefault();

        const value = inputRef.current!.value;

        if(value.trim().length === 0) {
            return;
        }

        todoCtx.onAddTodo(value);
    }
    
    return <form className={classes.form} onSubmit={handleSubmitEvent}>
        <label htmlFor="text">Todo Text</label>
        <input type="text" id="text" ref={inputRef} />
        <button>Add Todo</button>
    </form>
}

export default NewTodo;