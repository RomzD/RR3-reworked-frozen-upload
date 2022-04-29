import React from "react";

import ComparisonMenuButton from "../comparison_list_button/ComparisonListButton";
import { comparisonButtonType } from "../comparison_list_button/ComparisonButtonSettings";
import { comparisonButtonSpecificClasses } from "../comparison_list_button/ComparisonButtonSettings";
import { animateStars } from "../../animations/falling_stars_on_click/fallingStars";
import './ComparisonListContainer.scss'


export default function ComparisonListContainer({ setBikeHook, chosenBike, comparisonList, side }) {

    const onComparisonButtonClicked = (e) => {
        if (!e.target.classList.contains('comparison-list-button')) {
            return;
        }

        const leftSide = Boolean(e.target.classList.contains(comparisonButtonSpecificClasses.left));

        if (leftSide) {
            setBikeHook(--chosenBike)
        } else {
            setBikeHook(++chosenBike)
        }
        animateStars(e)
    }

    // const initiateStarfall = () = > {

    // }


    return (
        <div onClick={onComparisonButtonClicked} className="comparison-list-container comparison-list-container_theme-outer">
            <div className="comparison-list-container comparison-list-container_theme-inner">
                <ComparisonMenuButton chosenBike={chosenBike} buttonType={comparisonButtonType.left} />
                {comparisonList}
                <ComparisonMenuButton chosenBike={chosenBike} buttonType={comparisonButtonType.right} />
            </div>
        </div>
    )
}