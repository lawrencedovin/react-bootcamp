import React, { useState } from 'react';
import './TodosList.css';

const TodosList = ({array}) => {
    return(
        <>
            <h1>Todos:</h1>
            <ul class="todos">
                {array.map(item => 
                <li>
                    <input type="checkbox" />
                    <b>{item}</b>
                </li>)}
            </ul>
        </>
    );
}

export default TodosList;