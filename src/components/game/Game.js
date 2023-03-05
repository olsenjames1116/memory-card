import React, {useEffect, useState} from 'react';
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

    // function startNewGame() {
    //     const cover = document.createElement('div');
    //     cover.classList.add('cover');

    //     const popup = document.createElement('div');
    //     popup.style.display = 'block';

    //     document.querySelector('div.body').append(cover, popup);

    // }

    // useEffect(() => {

    // }, []);

    // useEffect(() => {
    //     if(currentScore === 12) {
    //         startNewGame();
    //     }
    // }, [currentScore]);

    return (
        <div className='game'>
            <Scoreboard currentScore={currentScore} />
            <CardTable awardPoint={awardPoint} resetScore={resetScore}/>
            {currentScore === 12 && <NewGame />}
        </div>
    );
}