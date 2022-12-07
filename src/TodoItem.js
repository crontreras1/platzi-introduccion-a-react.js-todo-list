import React from "react";
import './TodoItem.css';

function TodoItem (props) {
    return (
        <li>
            <div className="check-container">
                <span className="check">👍</span>

                <p>{props.text}</p>
            </div>

            <span className="delete">✖️</span>
        </li>
    );
}

export { TodoItem };