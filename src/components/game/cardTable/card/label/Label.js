import React from 'react';
import '../../../../../styles/game/cardTable/card/label/Label.css';

export default function Label(props) {
    const {label} = props;

    return (
        <span className='label'>{label}</span>
    );
}