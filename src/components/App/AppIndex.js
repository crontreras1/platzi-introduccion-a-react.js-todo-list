import React from "react";
import { App } from './App';

// const defaultTodos = [
//   {text: 'Harry Potter y el Caliz de Fuego', completed: true},
//   {text: 'Harry Potter y la Camara de los Secretos', completed: true},
//   {text: 'tarea3', completed: false},
//   {text: 'tarea4', completed: false},
//   {text: 'Harry Potter y las Reliquias de la Muerte', completed: true}
// ];

function AppIndex() {
  const localStorageTodos = localStorage.getItem ('TODOS_V1');
  let parsedTodos; 

  if (!localStorageTodos) {
    localStorage.setItem ('TODOS_V1', JSON.stringify([]));
    parsedTodos = []; 
  } else {
    parsedTodos = JSON.parse (localStorageTodos);
  }

  const [ todos, setTodos ] = React.useState (parsedTodos);
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

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify (newTodos);
    localStorage.setItem ('TODOS_V1', stringifiedTodos);
    setTodos (newTodos);
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
    < App 
        searchValue={ searchValue }
        setSearchValue={ setSearchValue } 
        totalTodos={ totalTodos }
        completedTodos={ completedTodos } 
        searchedTodos={ searchedTodos } 
        completeTodo={ completeTodo }
        deleteTodo={ deleteTodo }
    />
  )
}

export default AppIndex;