import React from 'react';
import Todos from './components/Todos';
import Todo from './model/Todo';

function App() {

  const items = [
    new Todo("javascript"),
    new Todo("typescript"),
    new Todo("react")
  ]

  return (
    <div className="App">
      <Todos items={items}/>
    </div>
  );
}

export default App;
