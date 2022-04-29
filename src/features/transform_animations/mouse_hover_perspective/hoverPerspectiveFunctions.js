import { axises, grayScaleFactor, animSettings } from "./hoverPerspectiveSettings";
export const imageHoverTransformation = async (e) => {
    const currentTarget = document.querySelector('.bike-image')
    const offsetX = deminishOffsetNegativeValue(e.nativeEvent.offsetX)
    const offsetY = deminishOffsetNegativeValue(e.nativeEvent.offsetY)
    const center = currentTarget.offsetWidth / 2
    const horizontalParameters = getRotationParams(offsetX, center, axises.yMaxOffset)
    const verticalParameters = getRotationParams(offsetY, center, axises.xMaxOffset)
    animateTarget(horizontalParameters, verticalParameters, currentTarget)

}



function getRotationParams(offset, center, axisOffset) {

    const side = calculateSidesMultiplier(offset, center)
    const mouseDistanceFromCenterInPercent = calculateMouseDistancesFromCenter(offset, center)
    const angle = axisOffset / 100 * mouseDistanceFromCenterInPercent
    return {
        side,
        angle
    }
}

function calculateMouseDistancesFromCenter(offset, center) {
    const mouseOffsetInPercent = Math.abs(offset - center) / center * 100
    return mouseOffsetInPercent
}

function calculateSidesMultiplier(offset, center) {
    return offset > center ? 1 : -1;
}

function deminishOffsetNegativeValue(offset) {
    return offset < 0 ? 0 : offset
}

function animateTarget(horizontalParameters, verticalParameters, target) {
    target.animate([
        {},
        {
            transform:
                `rotateY(${horizontalParameters.side * (horizontalParameters.angle.toFixed())}deg)
                 rotateX(${(verticalParameters.side * (verticalParameters.angle).toFixed())}deg)`
        }], { ...animSettings.newStep, composite: 'replace', endDelay: 300 })
}