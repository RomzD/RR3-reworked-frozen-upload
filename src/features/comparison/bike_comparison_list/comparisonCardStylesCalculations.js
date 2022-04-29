const ANGLE = 6;


const calculateTranslates = (chosenBikeIndex, itemIndex) => {
    const cardsSide = getCardSide(chosenBikeIndex, itemIndex);
    const isBikeChosen = chosenBikeIndex === itemIndex;
    if (cardsSide === 'left') {
        return `translateX(${(itemIndex - chosenBikeIndex) * 150}%) translateZ(${isBikeChosen ? 0 : -30}px)`;
    }

    if (cardsSide === 'right') {
        return `translateX(${(itemIndex - chosenBikeIndex) * 150}%) translateZ(${isBikeChosen ? 0 : -30}px)`;
    }
}

const calculateOpacity = (chosenBikeIndex, itemIndex) => {
    const cardsSide = getCardSide(chosenBikeIndex, itemIndex);
    if (cardsSide === 'left') {
        return 1 - 0.5 * (chosenBikeIndex - itemIndex)
    }

    if (cardsSide === 'right') {
        return 1 - 0.5 * (itemIndex - chosenBikeIndex)
    }
}


const getCardSide = (choseBikeIndex, itemIndex) => {
    return choseBikeIndex > itemIndex ? 'left' : 'right';
}

const calculateRotation = (choseBikeIndex, itemIndex) => {
    const cardsSide = getCardSide(choseBikeIndex, itemIndex);
    if (cardsSide === 'left') {
        return `rotateY(${-(choseBikeIndex - itemIndex) * ANGLE}deg)`
    }

    if (cardsSide === 'right') {
        return `rotateY(${(itemIndex - choseBikeIndex) * ANGLE}deg)`
    }
}

export default function calculateStyles(choseBikeIndex, itemIndex) { 
    return {
        transform: calculateTranslates(choseBikeIndex, itemIndex) + ' ' + calculateRotation(choseBikeIndex, itemIndex),
        opacity: calculateOpacity(choseBikeIndex, itemIndex),
        zIndex: -1
    }
}