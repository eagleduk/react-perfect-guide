import React from "react"

import classes from "./Todos.module.css";

import Todo from "../model/Todo"
import TodoItem from "./TodoItem";

type TT = {
    items: Todo[];
}

type a = React.FC<TT>

const Todos: a = (props) => {
    return <ul className={classes.todos}>
        {
            props.items.map(item => <TodoItem key={item.id} text={item.text} />)
        }
    </ul>
}

export default Todos


function FTodos<TT>(props: React.ComponentProps<React.JSXElementConstructor<TT>>) {
    return <h1>{props}</h1>
}

export {FTodos}