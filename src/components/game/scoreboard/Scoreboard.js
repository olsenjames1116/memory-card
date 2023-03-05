import React, {useEffect, useState} from 'react';
import CurrentScore from './currentScore/CurrentScore.js';
import HighScore from './highScore/HighScore.js';
import '../../../styles/game/scoreboard/Scoreboard.css';

// Displays a scoreboard for a user to track their score
export default function Scoreboard(props) {
    const {currentScore} = props;

    const[highScore, setHighScore] = useState(0);

    // Reached after an update to the current score has been made
    function checkHighScore() {
        // If current score is greater than high score, there is a new high score
        if(currentScore > highScore) {
            setHighScore(currentScore);
        }
    }

    // Checks high score after every update
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