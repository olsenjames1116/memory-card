import React from 'react';
import CurrentScore from './currentScore/CurrentScore.js';
import HighScore from './highScore/HighScore.js';

export default function Scoreboard() {
    return (
        <div className='scoreboard'>
            <div>Scoreboard</div>
            <CurrentScore />
            <HighScore />
        </div>
    );
}