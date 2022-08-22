import React from "react";

const Clicker = ({message, btnText}) => {

    const consoleMe = (message) => {
        console.log(message);
    }

    const handleScroll = (event) => {
        console.log('scrollTop: ', event.currentTarget.scrollTop);
        console.log('offsetHeight: ', event.currentTarget.offsetHeight);
    };

    const fireLasers = (e) => {
        console.log(e.currentTarget);
        console.log(e.nativeEvent);
        console.log(e);
    }

    return (
        <>
            <button onClick={() => consoleMe(message)}>{btnText}</button>
            <textarea onScroll={handleScroll} rows="2">
                adsffadffdsfdsafd
                adsffadffdsfdsafd
                adsffadffdsfdsafd
                adsffadffdsfdsafd
                adsffadffdsfdsafd
                adsffadffdsfdsafd
            </textarea>
        </>
    );
}

export default Clicker;