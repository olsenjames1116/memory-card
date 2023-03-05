import React from 'react';
import '../../../styles/game/newGame/NewGame.css';

// Reached when a user has won the game
export default function NewGame() {
    // Reload the page to start a new game
    function reloadPage() {
        window.location.reload();
    }

    return (
        <div>
            <div className='cover'></div>
            <div className='popup'>
                <h3>You Won!</h3>
                <p>All memory cards have been selected correctly. Press the 'New Game' button to start another game.</p>
                <button type='button' onClick={reloadPage}>New Game</button>
            </div>
        </div>
    );
}