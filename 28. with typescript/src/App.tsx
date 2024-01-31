import { useState } from 'react';
import Todos from './components/Todos';
import Todo from './model/Todo';
import NewTodo from './components/NewTodo';

function App() {

  const [items, setItems] = useState<Todo[]>([]);

  const handleAddTodoItemEvent = (t: string) => {
    setItems(prev => [...prev, new Todo(t)])
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={handleAddTodoItemEvent} />
      <Todos items={items}/>
    </div>
  );
}

export default App;
