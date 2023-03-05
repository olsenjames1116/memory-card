import React from 'react';
import '../../../../../styles/game/cardTable/card/picture/Picture.css';

export default function Picture(props) {
    const {src, alt} = props;

    return (
        <img className='picture' src={src} alt={alt}></img>
    );
}