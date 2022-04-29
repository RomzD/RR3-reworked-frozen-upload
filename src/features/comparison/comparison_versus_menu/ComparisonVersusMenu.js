import React from "react";

import ComparisonListContainer from "../comparison_list_container/ComparisonListContainer";
import BikeComparisonList from "../bike_comparison_list/BikeComparisonList";
import './ComparisonVersusMenu.scss'

export default function ComparisonVersusMenu({ chosenBikes, setBikes }) {

    const [chosenBike1, chosenBike2] = chosenBikes;
    const [setBike1, setBike2] = setBikes

    const onSetBikeButtonClicked = (e) => {
        const side = e.target.name;
        const bikeId = Number(e.target.value);
        const whichBike = e.currentTarget.id;
        if (side === 'switchToLeft') {
            SetBike(whichBike, bikeId - 1, setBikes)
        }
        if (side === 'switchToRight' & bikeId !== 15) {
            SetBike(whichBike, bikeId + 1, setBikes)
        }
    }

    return (
        <div onClick={onSetBikeButtonClicked} className="bike-choice-container   bike-choice-container_theme-comparison" >
            <BikeComparisonList setBikeHook={setBike1} chosenBike={chosenBike1} side='left' />
            <div className="comparison-text">VS</div>
            <BikeComparisonList setBikeHook={setBike2} chosenBike={chosenBike2} side='right' />
        </div>
    )
}


function SetBike(whichBike, bikeId, setHooks) {
    const [setBike1, setBike2] = setHooks;
    if (whichBike === 'comp1') {
        setBike1(bikeId);
        return;
    }

    if (whichBike === 'comp2') {
        setBike2(bikeId);
    }
}