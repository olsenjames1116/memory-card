import React, {useEffect, useState} from 'react';
import CurrentScore from './currentScore/CurrentScore.js';
import HighScore from './highScore/HighScore.js';
import '../../../styles/game/scoreboard/Scoreboard.css';

export default function Scoreboard(props) {
    const {currentScore} = props;

    const[highScore, setHighScore] = useState(0);

    function checkHighScore() {
        if(currentScore > highScore) {
            setHighScore(currentScore);
        }
    }

    useEffect(() => {
        checkHighScore();
    });

    return (
        <div className='scoreboard'>
            <CurrentScore currentScore={currentScore} />
            <HighScore highScore={highScore} />
        </div>
    );
}