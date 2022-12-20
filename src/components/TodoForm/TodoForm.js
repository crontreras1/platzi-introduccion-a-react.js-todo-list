import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import './TodoForm.css'

function TodoForm () {
    const [newTodoValue, setNewTodoValue ] = React.useState ('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext (TodoContext);

    const onChange = (event) => {
        setNewTodoValue (event.target.value);
    };

    const cancelButton = () => {
        setOpenModal (false);
    };
    
    const submitForm = (event) => {
        event.preventDefault ();
        addTodo (newTodoValue);
        setOpenModal (false);
        setNewTodoValue ('');
    };

    return (
        <div className="form-container">
            <form onSubmit={ submitForm }>
                <label className="label">Escribe tu nueva tarea:</label>

                <textarea
                    className="main-text"
                    value={ newTodoValue }
                    onChange={ onChange }
                    placeholder="Nueva tarea"
                >
                </textarea>

                <div>
                    <button
                        type="button"
                        className="form-button"
                        onClick={ cancelButton }
                        >
                        Cancelar
                    </button>

                    <button 
                        type="submit"
                        className="form-button"
                        >
                        Agregar tarea
                    </button>
                </div>
            </form>
        </div>
    );
};

export { TodoForm };