import React from "react";
import './TodoSearch.css';

function TodoSearch () {
    return (
        <div className="input-container">
            <input placeholder="🔎 Busca una tarea aquí"/>
        </div>
    );
}

export { TodoSearch };