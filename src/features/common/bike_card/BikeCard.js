import React from "react";

import { bikeCardSpecificClasses, bikeCardCommonClasses, bikeCardContainerType } from './BikeCardSettings'
import './BikeCard.scss'

export default function BikeCard({ bike, bikeCardType, styles }) {
    const image = require(`../../../img/${bike.name}.png`).default;
    
    if (styles) {
        styles.backgroundImage = `url('${image}')`
    }

    const Element = React.createElement(bikeCardContainerType[bikeCardType], {
        value: bike.id,
        className: `${bikeCardCommonClasses} ${bikeCardSpecificClasses[bikeCardType]
        }`,
        style: styles || {}
    })
    return Element
}