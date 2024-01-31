import React, { useContext } from "react"

import classes from "./Todos.module.css";

import TodoItem from "./TodoItem";
import { TodoContext } from "../store/TodoContext";

const Todos: React.FC = () => {
    const todoCtx = useContext(TodoContext);

    return <ul className={classes.todos}>
        {
            todoCtx.items.map(item => <TodoItem key={item.id} text={item.text} onRemoveTodo={todoCtx.onRemoveTodo.bind(null, item.id)} />)
        }
    </ul>
}

export default Todos


function FTodos<TT>(props: React.ComponentProps<React.JSXElementConstructor<TT>>) {
    return <h1>{props}</h1>
}

export {FTodos}