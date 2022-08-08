import React, { useState } from 'react';
import './CoinFlip.css';
import { randomItem } from '../../utils/Utility';

const CoinFlip = ({coinSides=['heads', 'tails']}) => {
    const [coinSide, setCoinSide] = useState(randomItem(coinSides));
    return(
        <>
            <h1>Coin Flip:</h1>
            <div class="coin">

                {coinSide === 'heads' ? 
                    "😀" 
                    : 
                    "🦅"
                }
            </div>
            <button onClick={() => setCoinSide(randomItem(coinSides))}>
                Flip Coin
            </button>
        </>
    );
}

export default CoinFlip;