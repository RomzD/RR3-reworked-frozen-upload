import { buildKeyFrames } from "./animSettings"

export default function neonAnimation(element, cssPropName, category) {
    const keyFrames = buildKeyFrames(cssPropName, category)

    element.animate(
        keyFrames
        , { duration: 10000, fill: 'forwards' })

}