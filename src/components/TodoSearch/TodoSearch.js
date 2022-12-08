import React from "react";
import './TodoSearch.css';

function TodoSearch ({ searchValue, setSearchValue }) {
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