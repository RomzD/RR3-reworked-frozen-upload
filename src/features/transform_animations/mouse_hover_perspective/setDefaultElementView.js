import { animSettings, defaultRotation} from './hoverPerspectiveSettings'

export default function setDefaultElementView(target, rotation) {
    if (!rotation) {
        rotation = defaultRotation
    }
    target.animate([{
    }, {
        transform: rotation
    }], { ...animSettings.default }
    )


}