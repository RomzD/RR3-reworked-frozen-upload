import React from 'react'

import { comparisonButtonCommonClasses, comparisonButtonSpecificClasses, comparisonButtonType } from './ComparisonButtonSettings'
import './ComparisonListButton.scss'
export default function ComparisonMenuButton({ buttonType, chosenBike }) {

    function isButtonDisabled(chosenBike, buttonType) {
        if ((chosenBike === 0 && buttonType === comparisonButtonType.left) ||
            (chosenBike === 15 && buttonType === comparisonButtonType.right)) {
            return true
        }
        return false
    }
    const isDisabled = isButtonDisabled(chosenBike, comparisonButtonType);

    return (
        <button className={`
        ${comparisonButtonCommonClasses} 
        ${comparisonButtonSpecificClasses[buttonType]}
        `}
            disabled={isButtonDisabled(chosenBike, buttonType)}
        >

        </button>
    )
}



