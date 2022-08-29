import React, {useState} from "react";
import generateRandomNumber from "../utils/generateRandomNumber";
import "./NumberGame.css";

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
    
    const restartGame = () => {
        setGuess(0);
        setRandomNumber(generateRandomNumber);
        setHasWon(false);
    }

    return (
        <>
            <h1 className={hasWon ? "winner" : "not-won"}>Your Guess: {guess}</h1>
            {/* <h1>Random Number: {randomNumber}</h1> */}
            <h1>Answered Correctly? {hasWon ? "Congrats you Won! 🎈" : "Incorrect Guess"} </h1>
            <input type="number" min="1" max="10" value={guess} onChange={handleChange}/>
            {hasWon 
                ?
                <button onClick={restartGame}>New Game</button>
                :
                <button onClick={checkGuess}>Confirm Guess</button>
            }
        </>
    )
}

export default NumberGame;