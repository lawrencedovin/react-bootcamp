import React, {useState} from "react";
import generateRandomNumber from "../utils/generateRandomNumber";

const NumberGame = () => {
    const [guess, setGuess] = useState(null);
    const [randomNumber, setRandomNumber] = useState(generateRandomNumber);

    const newRandomNumber = () => {
        setRandomNumber(generateRandomNumber);
    }

    const handleChange = (event) => {
        setGuess(event.target.value);
    }

    const checkGuess = () => {

    }

    return (
        <>
            <h1>Your Guess: {guess}</h1>
            <h1>Random Number: {randomNumber}</h1>
            <input type="number" min="1" max="10" value={guess} onChange={handleChange}/>
            <button onClick={() => checkGuess}>Confirm Guess</button>
            <button onClick={newRandomNumber}>Generate Number</button>
        </>
    )
}

export default NumberGame;