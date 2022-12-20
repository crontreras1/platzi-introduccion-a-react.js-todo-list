import React from "react";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoContext } from "../TodoContext/TodoContext";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoForm } from "../TodoForm/TodoForm";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { Modal } from "../Modal/ModalIndex";

function App() {
  const { 
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext (TodoContext);

  return (
    <React.Fragment>
      <TodoSearch/>

      <TodoCounter/>

      <TodoList>
        {error && <p>Hubo un error</p>}
        {loading && <p>Cargando...</p>}
        {(!loading && !searchedTodos.length) && <p>Crea tu primera tarea</p>}

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

          { openModal && (      
            <Modal>
              <TodoForm />
            </Modal>) }

      <CreateTodoButton 
        setOpenModal={ setOpenModal }
      />
    </React.Fragment>
  );
}

export { App };
