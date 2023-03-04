import React from 'react';
import Picture from './picture/Picture.js';
import Label from './label/Label.js';

export default function Card() {
    return (
        <div className='card'>
            <div>Card</div>
            <Picture />
            <Label />
        </div>
    );
}