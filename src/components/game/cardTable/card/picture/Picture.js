import React from 'react';
import '../../../../../styles/game/cardTable/card/picture/Picture.css';

// Displays a picture for each card
export default function Picture(props) {
    const {src, alt} = props;

    return (
        <img className='picture' src={src} alt={alt}></img>
    );
}