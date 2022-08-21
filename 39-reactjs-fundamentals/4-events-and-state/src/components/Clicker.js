import React from "react";

const Clicker = ({message, btnText}) => {

    const consoleMe = (message) => {
        console.log(message);
    }

    return <button onClick={() => consoleMe(message)}>{btnText}</button>
}

export default Clicker;