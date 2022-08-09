import React, { useState } from 'react';
import './TodosList.css';

const TodosList = ({array}) => {
    return(
        <>
            <h1>Todos:</h1>
            <ul className="todos">
                {array.map(item => 
                <li key={item.id}>
                    <input type="checkbox" />
                    <b>{item.name}</b>
                </li>)}
            </ul>
        </>
    );
}

export default TodosList;