import React from "react";
import './TodoItem.css';

function TodoItem (props) {
    return (
        <li>
            <div className="check-container">
                <span 
                    className={`check ${props.completed && 'todo-check-completed'}`}
                    onClick={ props.statusComplete }    
                >
                    √
                </span>

                <p 
                    className={`${props.completed && 'todo-text-completed'}`}
                >   
                    {props.text}
                </p>
            </div>

            <span 
                className="delete"
                onClick={ props.statusDelete }
            >
                ✖️
            </span>
        </li>
    );
}

export { TodoItem };