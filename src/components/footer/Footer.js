import React from 'react';
import Author from './author/Author.js';
import Sources from './sources/Sources.js';
import '../../styles/footer/Footer.css';

// Displays the footer on the bottom of the page
export default function Footer() {
    return (
        <div className='footer'>
            <Author />
            <Sources />
        </div>
    )
}