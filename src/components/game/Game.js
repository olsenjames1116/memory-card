import React, {useState} from 'react';
import Scoreboard from './scoreboard/Scoreboard.js';
import CardTable from './cardTable/CardTable.js';
import NewGame from './newGame/NewGame.js';
import '../../styles/game/Game.css';

// Displays the main content of the page
export default function Game() {
    const [currentScore, setCurrentScore] = useState(0);

    // Reached when a card that has not been selected yet, is selected
    function awardPoint() {
        setCurrentScore((prevScore) => prevScore + 1);
    }

    // Reached when a card that has already been selected, is selected
    function resetScore() {
        setCurrentScore(0);
    }

    return (
        <div className='game'>
            <Scoreboard currentScore={currentScore} />
            <CardTable awardPoint={awardPoint} resetScore={resetScore}/>
            {currentScore === 12 && <NewGame />}
        </div>
    );
}