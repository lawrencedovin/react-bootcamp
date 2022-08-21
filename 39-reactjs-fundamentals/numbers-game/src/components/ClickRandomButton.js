import React, {useState} from "react";
import { getRandomNumber } from "../utils/getRandomNumber";

const ClickRandomNumber = ({maxNumber}) => {
    const [visitedNumbers, setVisitedNumbers] = useState(new Set());
    const [number, setNumber] = useState(getRandomNumber(maxNumber));

    const handleClick = () => {
        setVisitedNumbers(visitedNumbers.add(number));
        setNumber(getRandomNumber(maxNumber));
        console.log(visitedNumbers);
    }

    return (
        <>
            <h1>{ visitedNumbers.has(number) ? `Visited Number: ${number}` : `New Number: ${number}`}</h1>
            <button className="btn" onClick={handleClick}>
                Click Me
            </button>
        </>
    );

}

export default ClickRandomNumber;