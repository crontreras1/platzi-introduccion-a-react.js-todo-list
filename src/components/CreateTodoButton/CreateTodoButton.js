import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton (props) {
    const agregarTareaBtn = () => {
        props.setOpenModal (prevState => !prevState);
    }

    return (
        <div className="button-container">
            <button 
                className="TodoButton"
                onClick={ agregarTareaBtn }
            >
                Agregar tarea
            </button>
        </div>
    );
}

export { CreateTodoButton };