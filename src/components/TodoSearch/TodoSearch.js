import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import './TodoSearch.css';

function TodoSearch () {
    const { searchValue, setSearchValue } = React.useContext (TodoContext);

    const inputTodoSearch = (event) => {
        console.log (event.target.value);
        setSearchValue (event.target.value);
    }

    return (
        <div 
            className="input-container"
        >
            <input 
                placeholder="🔎 Busca una tarea aquí"
                value={ searchValue }
                onChange={ inputTodoSearch }
            />
        </div>
    );
}

export { TodoSearch };