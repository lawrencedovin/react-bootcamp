import React, { useState } from 'react';
import './RandomChoice.css';
import { randomItem } from '../../utils/Utility';

const RandomChoice = ({array}) => {
    const [color, setColor] = useState(randomItem(array));
    return(
        <>
            <h1>All Colors:</h1>
            <ul>
                {array.map(color => <li>{color}</li>)}
            </ul>
            <h1 style={{'color': color}}>Random Color: {color}</h1>
            <button onClick={() => setColor(randomItem(array))}>
                Click me
            </button>
        </>
    );
}

export default RandomChoice;