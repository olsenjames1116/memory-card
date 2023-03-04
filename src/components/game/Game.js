import React from 'react';
import Scoreboard from './scoreboard/Scoreboard.js';
import CardTable from './cardTable/CardTable.js';

export default function Game() {
    return (
        <div className='game'>
            <div>Game</div>
            <Scoreboard />
            <CardTable />
        </div>
    );
}