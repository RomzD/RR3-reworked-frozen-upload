
let counter = true
export async function rotate180deg(target) {
    const deg = counter ? 180 : 0
    counter = !counter

    const transformRotation = `rotateY(${deg}deg)`

    target.animate([
        {},
        {

            transform: transformRotation
        }
    ],
        { duration: 500, fill: "forwards" }

    )
}