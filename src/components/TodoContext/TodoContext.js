import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext ();

function TodoProvider (props) {
    const {
        item: todos,
        saveItem: saveTodos, 
        loading,
        error
      } = useLocalStorage ('TODOS_V1', []);
      //Cambio de estado del TodoSearch.js
      const [  searchValue, setSearchValue ] = React.useState ('');
    
      //Cambio de numero de tareas hechas y por hacer del TodoCounter.js
      const completedTodos = todos.filter (todo => !!todo.completed).length;
      const totalTodos = todos.length;
    
      let searchedTodos = [];
      
      //Condicional para buscar las tareas en el imput
      if (!searchValue.length >= 1) {
        searchedTodos = todos;
      } else {
        searchedTodos = todos.filter (todo => {
          //Que busque las tareas sin importar las letras mayusculas y minusculas
          const lowerCaseText = todo.text.toLowerCase ();
          const searchText = searchValue.toLowerCase ();
          return lowerCaseText.includes (searchText);
        });
      }
    
      //marcar todos como completados
      const completeTodo = (text) => {
        //Encontrar la posición de X todo
        const todoIndex = todos.findIndex (todo => todo.text === text);
    
        //encontrar similitud/igualdad de todos
        const newTodos = [...todos];
        //marcar los todos como completados
        newTodos[todoIndex].completed = true;
        //Actualizamos nuestro estado
        saveTodos (newTodos);
      }
    
      //eliminar todos
      const deleteTodo = (text) => {
        //Encontrar la posición de X todo
        const todoIndex = todos.findIndex (todo => todo.text === text);
    
        //encontrar similitud/igualdad de todos
        const newTodos = [...todos];
        //marcar los todos como eliminados
        newTodos.splice (todoIndex, 1);
        //Actualizamos nuestro estado
        saveTodos (newTodos);
      }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            searchValue,
            setSearchValue,
            totalTodos,
            completedTodos,
            searchedTodos,
            completeTodo,
            deleteTodo,
        }}>
            { props.children }
        </TodoContext.Provider>
    );
};

export { TodoContext, TodoProvider };