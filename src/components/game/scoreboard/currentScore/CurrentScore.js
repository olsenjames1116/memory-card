import React from 'react';

// Displays the current score for the user
export default function CurrentScore(props) {
    const {currentScore} = props;

    return (
        <div className='currentScore'>
            <div>Current Score: {currentScore}</div>
        </div>
    );
}