import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton () {
    const agregarTareaBtn = () => {
        alert ('agrega una nueva tarea :)')
    }

    return (
        <button 
            className="TodoButton"
            onClick={ agregarTareaBtn }
        >
            Agregar tarea
        </button>
    );
}

export { CreateTodoButton };