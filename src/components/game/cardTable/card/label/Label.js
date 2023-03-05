import React from 'react';
import '../../../../../styles/game/cardTable/card/label/Label.css';

// Displays a label for each card
export default function Label(props) {
    const {label} = props;

    return (
        <span className='label'>{label}</span>
    );
}