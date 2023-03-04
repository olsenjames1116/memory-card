import React from 'react';

export default function Picture(props) {
    const {src, alt} = props;

    return (
        <img src={src} alt={alt}></img>
    );
}