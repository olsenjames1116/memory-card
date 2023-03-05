import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import _ from 'lodash';
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


export default function CardTable(props) {
    const [cardArray, setCardArray] = useState([
        {   
            id: uniqid(),
            name: 'bears',
            src: Bears,
            alt: 'A Chicago Bears helmet',
            label: 'Chicago Bears',
            selected: false
        },
        {
            id: uniqid(),
            name: 'browns',
            src: Browns,
            alt: 'A Cleveland Browns helmet',
            label: 'Cleveland Browns',
            selected: false
        },
        {
            id: uniqid(),
            name: 'buccaneers',
            src: Buccaneers,
            alt: 'A Tampa Bay Buccaneers helmet',
            label: 'Tampa Bay Buccaneers',
            selected: false
        },
        {
            id: uniqid(),
            name: 'chargers',
            src: Chargers,
            alt: 'An LA Chargers helmet',
            label: 'LA Chargers',
            selected: false
        },
        {
            id: uniqid(),
            name: 'chiefs',
            src: Chiefs,
            alt: 'A Kansas City Chiefs helmet',
            label: 'Kansas City Chiefs',
            selected: false
        },
        {
            id: uniqid(),
            name: 'colts',
            src: Colts,
            alt: 'An Indianapolis Colts helmet',
            label: 'Indianapolis Colts',
            selected: false
        },
        {
            id: uniqid(),
            name: 'eagles',
            src: Eagles,
            alt: 'A Philadelphia Eagles helmet',
            label: 'Philadelphia Eagles',
            selected: false
        },
        {
            id: uniqid(),
            name: 'giants',
            src: Giants,
            alt: 'A New York Giants helmet',
            label: 'New York Giants',
            selected: false
        },
        {
            id: uniqid(),
            name: 'lions',
            src: Lions,
            alt: 'A Detroit Lions helmet',
            label: 'Detroit Lions',
            selected: false
        },
        {
            id: uniqid(),
            name: 'niners',
            src: Niners,
            alt: 'A San Francisco 49ers helmet',
            label: 'San Francisco 49ers',
            selected: false
        },
        {
            id: uniqid(),
            name: 'raiders',
            src: Raiders,
            alt: 'A Las Vegas Raiders helmet',
            label: 'Las Vegas Raiders',
            selected: false
        },
        {
            id: uniqid(),
            name: 'vikings',
            src: Vikings,
            alt: 'A Minnesota Vikings helmet',
            label: 'Minnesota Vikings',
            selected: false
        }
    ]);

    function randomizeCards() {
        setCardArray(() => _.shuffle([...cardArray]));
    }

    useEffect(() => {
        randomizeCards();
    }, []);

    const {awardPoint, resetScore} = props;

    function checkSelected(id) {
        const targetCard = cardArray.find((card) => card.name === id);
        const {selected} = targetCard;

        if(selected) {
            resetScore();
            console.log('already selected');
            //reset card selected attributes to false
            return;
        }

        awardPoint();
        setCardArray((prevArray) => {
            return (
                prevArray.map((card) => {
                    if(card === targetCard) {
                        card.selected = true;
                        console.log(card);
                        return;
                    }
                    return card;
                })
            );
        });
    }

    function handleClick(event) {
        checkSelected(event.currentTarget.id);
        randomizeCards();
    }

    return (
        <div className='cardTable'>
            <ul>
                {
                    cardArray.map((card) => {
                        return (                        
                            <Card key={card.id} card={card} handleClick={handleClick} />
                        );
                    })
                }
            </ul>
        </div>
    );
}