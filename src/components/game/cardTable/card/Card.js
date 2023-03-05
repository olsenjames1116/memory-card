import React from 'react';
import Picture from './picture/Picture.js';
import Label from './label/Label.js';
import '../../../../styles/game/cardTable/card/Card.css';

// Display a card for each NFL team
export default function Card(props) {
    const {name, src, alt, label} = props.card;
    const {handleClick} = props;

    return (
        <li id={name} className='card' onClick={handleClick}>
            <Picture src={src} alt={alt}/>
            <Label label={label}/>
        </li>
    );
}