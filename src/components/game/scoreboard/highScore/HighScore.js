import React from 'react';

// Displays the high score for a user
export default function HighScore(props) {
    const {highScore} = props;

    return (
        <div className='highScore'>
            <div>High Score: {highScore}</div>
        </div>
    );
}