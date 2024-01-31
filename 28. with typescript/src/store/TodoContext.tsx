import { createContext, useState } from "react";
import Todo from "../model/Todo";

type TodoContextType = {
    items: Todo[];
    onAddTodo: (t:string) => void,
    onRemoveTodo: (i:number) => void
}

export const TodoContext = createContext<TodoContextType>({
    items: [],
    onAddTodo: (t: string) => {},
    onRemoveTodo: (i: number) => {}
})

const TodoContextProvider: React.FC = (props) => {
    const [items, setItems] = useState<Todo[]>([]);
  
    const handleAddTodoItemEvent = (t: string) => {
      setItems(prev => [...prev, new Todo(t)])
    }
  
    const handleRemoveTodoItemEvent = (i: number) => {
      setItems(prev => prev.filter(item => item.id !== i));
    }

    const contextValue: TodoContextType = {
        items,
        onAddTodo: handleAddTodoItemEvent,
        onRemoveTodo: handleRemoveTodoItemEvent
    }

    return <TodoContext.Provider value={contextValue}>{props.children}</TodoContext.Provider>
}

export default TodoContextProvider;