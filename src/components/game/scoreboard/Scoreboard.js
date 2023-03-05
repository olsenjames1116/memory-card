import React, {useState} from 'react';
import CurrentScore from './currentScore/CurrentScore.js';
import HighScore from './highScore/HighScore.js';

export default function Scoreboard(props) {
    const {currentScore} = props;

    const[highScore, setHighScore] = useState(0);

    return (
        <div className='scoreboard'>
            <CurrentScore currentScore={currentScore} />
            <HighScore highScore={highScore} />
        </div>
    );
}