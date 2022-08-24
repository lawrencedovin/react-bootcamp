import React, {useState} from "react";
import generateRandomNumber from "../utils/generateRandomNumber";

const NumberGame = () => {
    const [guess, setGuess] = useState(0);
    const [randomNumber, setRandomNumber] = useState(generateRandomNumber);
    const [hasWon, setHasWon] = useState(false);

    const newRandomNumber = () => {
        setRandomNumber(generateRandomNumber);
    }

    const handleChange = (event) => {
        setGuess(parseInt(event.target.value));
    }

    const checkGuess = () => {
        guess === randomNumber ? setHasWon(true) : setHasWon(false);
        console.log(`Guess: ${guess} Random Number: ${randomNumber}`);
    }

    return (
        <>
            <h1>Your Guess: {guess}</h1>
            {/* <h1>Random Number: {randomNumber}</h1> */}
            <h1>Answered Correctly? {hasWon ? "Congrats you Won!" : "Incorrect Guess"} </h1>
            <input type="number" min="1" max="10" value={guess} onChange={handleChange}/>
            <button onClick={checkGuess}>Confirm Guess</button>
            <button onClick={newRandomNumber}>Generate New Random Number</button>
        </>
    )
}

export default NumberGame;