import React from "react";

import './Star.scss'

export default function Star({ side }) {
    const starClass = side === 'left' ? 'star_theme-left' : 'star_theme-right'
    return (
        <div className={`star ${starClass}`}>

        </div>
    )
}