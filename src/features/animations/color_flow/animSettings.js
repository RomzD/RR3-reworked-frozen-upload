const colors = {
    rat: 'rgb(253, 66, 84)',
    sport: 'rgb(93, 255, 93)',
    super: 'rgb(255, 44, 192)',
    wild: 'rgb(32, 32, 255)'
}

export const cssProps = {
    background: 'background',
    color: 'color'
}

const keyFramesDummy = [
    { 'prop': 'off' },
    { 'prop': 'off', offset: 0.11 },
    { 'prop': 'on', offset: 0.13 },
    { 'prop': 'on', offset: 0.15 },
    { 'prop': 'off', offset: 0.16 },
    { 'prop': 'on', offset: 0.17 },
    { 'prop': 'off', offset: 0.25 },
    { 'prop': 'on', offset: 0.4 },
    { 'prop': 'on', offset: 0.9 },
    { 'prop': 'off', offset: 0.91 },
    { 'prop': 'on', offset: 0.92 },
    { 'prop': 'off', offset: 0.93 },
    { 'prop': 'on', offset: 0.94 },
    { 'prop': 'off', offset: 0.95 },
    { 'prop': 'on'},
]

function buildLinearGradinet(color) {
    return `linear-gradient(to bottom, ${color}, transparent) `
}

export function buildKeyFrames(cssPropName, bikeCategory) { 
    let color = colors[bikeCategory];
    let noColor = 'gray'
    if (cssPropName === cssProps.background) {
        color = buildLinearGradinet(color);
        noColor = 'transparent'
    }


     return keyFramesDummy.map((keyframe) => {
        const newKeyframe = {}
        newKeyframe[cssPropName] = keyframe['prop'] === 'off' ? noColor : color;
        newKeyframe.offset = keyframe.offset
        return newKeyframe
    })
}
