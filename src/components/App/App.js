import React from "react";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";

function App({
    searchValue,
    setSearchValue,
    totalTodos,
    completedTodos,
    searchedTodos, 
    completeTodo,
    deleteTodo
  }) {
  return (
    <React.Fragment>
      <TodoSearch 
         searchValue={ searchValue }
         setSearchValue={ setSearchValue } 
      />

      <TodoCounter 
        total={ totalTodos }
        completed={ completedTodos }
      />

      <TodoList>
        {searchedTodos.map (todo => (
          <TodoItem 
          key={ todo.text } 
          text={ todo.text } 
          completed={ todo.completed }
          statusComplete={ () => completeTodo(todo.text) }
          statusDelete={ () => deleteTodo(todo.text) }
          />
        ))}  
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export { App };
