import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const todos = [
  {text: 'tarea1', completed: false},
  {text: 'tarea2', completed: false},
  {text: 'tarea3', completed: false},
  {text: 'tarea4', completed: false},
  {text: 'tarea5', completed: false}
];

function App() {
  return (
    <React.Fragment>
      <TodoSearch />

      <TodoCounter />

      <TodoList>
        {todos.map (todo => (
          <TodoItem key={ todo.text } text={ todo.text } />
        ))}  
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
