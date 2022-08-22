import React from "react";

const ButtonGroup = () => {

    const colors = {
        red: "Red",
        yellow: "Yellow",
        green: "Green"
    }

    const printColor = (color) => {
        console.log(color);
    }

    return (
        <div>
            <button 
                style={{backgroundColor: "red"}} 
                onClick={() => printColor(colors["red"])}>                    
                Red
            </button>
            <button 
                style={{backgroundColor: "yellow"}} 
                onClick={() => printColor(colors["yellow"])}>
                Yellow
            </button>
            <button 
                style={{backgroundColor: "green"}} 
                onClick={() => printColor(colors["green"])}>
                Green
            </button>
        </div>
    );
}

export default ButtonGroup