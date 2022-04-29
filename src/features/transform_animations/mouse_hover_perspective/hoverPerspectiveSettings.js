export const animSettings = {
    newStep: {
        duration: 100,
        fill: 'forwards'
    },
    default: {
        duration: 1000,
        fill: 'forwards',
        delay: 350
    }
}

export function createDefaultRotationAnglesString(xAngle, yAngle) {
    return `rotateX(${xAngle}deg) rotateY(${yAngle}deg)`
}
export const defaultRotation = createDefaultRotationAnglesString(0, -20)
export const defaultGrayScale = `grayscale(0)`;
export const grayScaleFactor = 5; /* since grayscale depends on the Y offset, it's maximum value is 20/100 = 0.2 too small to affect visual grayscaling, factor comes in play */
export const axises = {
    xMaxOffset: 10,
    yMaxOffset: 10
}

