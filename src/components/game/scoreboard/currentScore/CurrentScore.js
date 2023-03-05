import React from 'react';

export default function CurrentScore(props) {
    const {currentScore} = props;

    return (
        <div className='currentScore'>
            <div>Current Score: {currentScore}</div>
        </div>
    );
}