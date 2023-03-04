import React from 'react';
import Author from './author/Author.js';
import Sources from './sources/Sources.js';

export default function Footer() {
    return (
        <div className='footer'>
            Footer
            <Author />
            <Sources />
        </div>
    )
}