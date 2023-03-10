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
import '../../../styles/game/cardTable/CardTable.css';

export default function CardTable(props) {
    const {awardPoint, resetScore} = props;

    // An array of cards for each NFL team
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

    // Utilize lodash's shuffle to randomize cards after each click
    function randomizeCards() {
        setCardArray(() => _.shuffle([...cardArray]));
    }

    // Randomize cards on mounting
    useEffect(() => {
        randomizeCards();
    }, []);

    // Reached when a card has been selected twice in the same round. Resets the cards for a new round
    function deselectCards() {
        setCardArray((prevArray) => {
            return (
                prevArray.map((card) => {
                    if(card.selected) card.selected = false;
                    return card;
                })
            );
        });
    }

    // Reached whenever a card that has not been selected yet in the round
    function selectCard(targetCard) {
        setCardArray((prevArray) => {
            return (
                prevArray.map((card) => {
                    if(card === targetCard) {
                        card.selected = true;
                    }
                    return card;
                })
            );
        });
    }

    // Checks if a card has been selected yet and routes it to the appropriate function
    function checkSelected(id) {
        const targetCard = cardArray.find((card) => card.name === id);
        const {selected} = targetCard;

        // A card has been selected already and a new round needs to start
        if(selected) {
            resetScore();
            deselectCards();
            return;
        }

        // Reached when a card has not been selected yet so a point must be given and the round continues
        awardPoint();
        selectCard(targetCard);
    }

    // Reached when a card has been clicked and routes it to the appropriate functions
    function handleClick(event) {
        checkSelected(event.currentTarget.id);
        randomizeCards();
    }

    return (
        <ul className='cardTable'>
            {
                // Create cards for every object in the array
                cardArray.map((card) => {
                    return (                        
                        <Card key={card.id} card={card} handleClick={handleClick} />
                    );
                })
            }
        </ul>
    );
}