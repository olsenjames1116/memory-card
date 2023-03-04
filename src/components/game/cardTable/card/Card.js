import React from 'react';
import Picture from './picture/Picture.js';
import Label from './label/Label.js';

export default function Card(props) {
    const {name, src, alt, label} = props.card;

    return (
        <li id={name} className='card'>
            <Picture src={src} alt={alt}/>
            <Label label={label}/>
        </li>
    );
}