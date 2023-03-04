import React, { useState } from 'react';
import uniqid from 'uniqid';
import Card from './card/Card.js';
import Bears from '../../../images/bears.jpeg';
import Browns from '../../../images/browns.jpeg';
import Buccaneers from '../../../images/buccaneers.jpeg';
import Chargers from '../../../images/chargers.jpeg';
import Chiefs from '../../../images/chiefs.jpeg';
import Colts from '../../../images/colts.jpeg';
import Eagles from '../../../images/eagles.jpeg';
import Giants from '../../../images/giants.jpeg';
import Lions from '../../../images/lions.jpeg';
import Niners from '../../../images/niners.jpeg';
import Raiders from '../../../images/raiders.jpeg';
import Vikings from '../../../images/vikings.jpeg';


export default function CardTable() {
    const [cardArray, setCardArray] = useState([
        {   
            id: uniqid(),
            name: 'bears',
            src: Bears,
            alt: 'A Chicago Bears helmet',
            label: 'Chicago Bears'
        },
        {
            id: uniqid(),
            name: 'browns',
            src: Browns,
            alt: 'A Cleveland Browns helmet',
            label: 'Cleveland Browns'
        },
        {
            id: uniqid(),
            name: 'buccaneers',
            src: Buccaneers,
            alt: 'A Tampa Bay Buccaneers helmet',
            label: 'Tampa Bay Buccaneers'
        },
        {
            id: uniqid(),
            name: 'chargers',
            src: Chargers,
            alt: 'An LA Chargers helmet',
            label: 'LA Chargers'
        },
        {
            id: uniqid(),
            name: 'chiefs',
            src: Chiefs,
            alt: 'A Kansas City Chiefs helmet',
            label: 'Kansas City Chiefs'
        },
        {
            id: uniqid(),
            name: 'colts',
            src: Colts,
            alt: 'An Indianapolis Colts helmet',
            label: 'Indianapolis Colts'
        },
        {
            id: uniqid(),
            name: 'eagles',
            src: Eagles,
            alt: 'A Philadelphia Eagles helmet',
            label: 'Philadelphia Eagles'
        },
        {
            id: uniqid(),
            name: 'giants',
            src: Giants,
            alt: 'A New York Giants helmet',
            label: 'New York Giants'
        },
        {
            id: uniqid(),
            name: 'lions',
            src: Lions,
            alt: 'A Detroit Lions helmet',
            label: 'Detroit Lions'
        },
        {
            id: uniqid(),
            name: 'niners',
            src: Niners,
            alt: 'A San Francisco 49ers helmet',
            label: 'San Francisco 49ers'
        },
        {
            id: uniqid(),
            name: 'raiders',
            src: Raiders,
            alt: 'A Las Vegas Raiders helmet',
            label: 'Las Vegas Raiders'
        },
        {
            id: uniqid(),
            name: 'vikings',
            src: Vikings,
            alt: 'A Minnesota Vikings helmet',
            label: 'Minnesota Vikings'
        }
    ]);

    return (
        <div className='cardTable'>
            <div>Card Table</div>
            <ul>
                {
                    cardArray.map((card) => {
                        return (                        
                            <Card key={card.id} card={card}/>
                        );
                    })
                }
            </ul>
        </div>
    );
}