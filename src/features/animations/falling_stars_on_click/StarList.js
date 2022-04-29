import React from "react";

import Star from "./Star";




export default function StarList({side}) {
    const starCount = Math.random() * 15;
    const stars = []
    for (let i = 0; i < starCount; i++) {
        stars.push(<Star side={side}/>)
    }
    return stars

}