import React from 'react';

export default function HighScore(props) {
    const {highScore} = props;

    return (
        <div className='highScore'>
            <div>High Score: {highScore}</div>
        </div>
    );
}