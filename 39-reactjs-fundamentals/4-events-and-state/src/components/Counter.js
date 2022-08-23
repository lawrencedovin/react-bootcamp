import React, {useState} from "react";

const Counter = ({firstNumber=1}) => {
    let [currentNumber, setCurrentNumber] = useState(firstNumber);

    const addOne = (currentNumber) => {
        return setCurrentNumber(currentNumber + 1);
    }

    return(
        <>
            <h1>{currentNumber}</h1>
            <button onClick={() => addOne(currentNumber)}>Add +1</button>
        </>
    );
}

export default Counter;