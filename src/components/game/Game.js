import React, {useState} from 'react';
import Scoreboard from './scoreboard/Scoreboard.js';
import CardTable from './cardTable/CardTable.js';
import NewGame from './newGame/NewGame.js';

export default function Game() {
    const [currentScore, setCurrentScore] = useState(0);

    function awardPoint() {
        setCurrentScore((prevScore) => prevScore + 1);
    }

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