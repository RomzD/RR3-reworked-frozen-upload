export const svgViewBoxRisizePixelBound = 1280;
export const viewBoxSizesEnum = {
    full: 100,
    half: 50
}

const marginsEnum = {
    full: 15,
    half: 10
}

const differenceLableDividerEnum = {
    full: 2,
    half: 1.80
}

export const widthBasis = {
    value: viewBoxSizesEnum.full
}
export const leftRight = {
    value: 15
};



const topBottom = 0
const numberOfElements = 24; /*12 rows. 2 elements on each row*/
const paddingBetweenBarsInPercent = 0.5;
export const margin = {
    top: topBottom,
    left: leftRight.value,
    right: leftRight.value,
    bottom: topBottom
}


const svgHeightDivider = 2;
export const height = 100 - margin.top - margin.bottom;
export const barHeight = height / svgHeightDivider / numberOfElements - paddingBetweenBarsInPercent;
export const lineHeight = height / svgHeightDivider / numberOfElements;

export const width = {
    value: widthBasis.value - margin.left - margin.right
}

export const statNameLableOffset = {
    value: margin.left - (margin.left / 30)
};

export const differenceLableOffset = {
    x: width.value + margin.left + margin.right / 3,
    y: lineHeight + lineHeight / 3
}

export const getBarVerticalOffset = (elememntIndex) => {
    return elememntIndex * lineHeight * 2
}

export const bikesColors = {
    fisrtBike: {
        start: 'red',
        end: '#fa0094'
    },
    secondBike: {
        start: '#3a4bb2',
        end: '#8e00fa'
    }
}
export const differenceLableAnimationColors = ['red', 'black'];
export const oddGroupBGColor = '#fafafa'
const evenGroupBGColor = 'white'
export const hoverGroupBGColor = '#e3aee3'
export const transitionDuration = 500;
export const singleElem = new Array(1);

export const getGradientUrl = (dataIndex, fieldName) => (`url(#bike${dataIndex + fieldName})`)
export const buildGradientId = (dataIndex, fieldName) => (`bike${dataIndex + fieldName}`)
export const calcGradientOffsetPointInPercent = (currentBikeExtremum, overallExtremum) => {
    return `${currentBikeExtremum / overallExtremum * 100}%`
}

export function recalcDimensions(newViewBoxWidth) {
    recalcWidthBasis(newViewBoxWidth)
    recalcMarginsOffset(newViewBoxWidth)
    recalculateWidth()
    recalcDifferenceLableOffset(newViewBoxWidth)
    recalclateStatNameLableOffset()
}

function recalcMarginsOffset(newViewBoxWidth) {
    leftRight.value = newViewBoxWidth === viewBoxSizesEnum.full ?
        marginsEnum.full :
        marginsEnum.half
    setSideMargins(leftRight.value)
}

function recalclateStatNameLableOffset() {
    statNameLableOffset.value = margin.left - (margin.left / 30)
}

function recalculateWidth() {
    width.value = widthBasis.value - margin.left - margin.right
}

function recalcWidthBasis(newViewBoxSize) {
    widthBasis.value = newViewBoxSize
}

function recalcDifferenceLableOffset(newViewBoxSize) {
    const divider = newViewBoxSize === viewBoxSizesEnum.half ?
        differenceLableDividerEnum.half :
        differenceLableDividerEnum.full

    differenceLableOffset.x = width.value + margin.left + margin.right / divider
}

function setSideMargins(sidesMarginValue) {
    margin.left = sidesMarginValue
    margin.right = sidesMarginValue
}

export function setColorRelatedOnIndexDependancy(elememntIndex) {
    return elememntIndex % 2 === 0 ? oddGroupBGColor : evenGroupBGColor
}

/*

export const bikesColors = {
    fisrtBike: {
        start: '#f1e122',
        end: '#ff693c'
    },
    secondBike: {
        start: '#b7f6ff',
        end: '#164f7c'
    }
}*/