import { starSettings } from "./fallingStarsSettings";

const RAF = window.requestAnimationFrame
const SECOND_IN_MS = 1000;
export function animateStars(e) {
    const domStars = document.querySelectorAll('.star')
    const buttonCoordinates = {
        x: e.nativeEvent.screenX,
        y: e.nativeEvent.screenY,
        targetHeight: e.target.offsetHeight,
        targetWidth: e.target.offsetWidth
    }
    console.log(buttonCoordinates.x, buttonCoordinates.y, buttonCoordinates.targetHeight)
    let starsObjects = new Array(domStars.length).fill(0)
    starsObjects = starsObjects.map(i => new Star(buttonCoordinates))


    domStars.forEach((domStar, i) => initStarStyle(domStar, starsObjects[i]))
    // console.dir(e)
    // debugger
    let animStartTime;
    RAF((timestamp) => {
        if (!animStartTime) {
            animStartTime = timestamp
        }
        animateStarsInRAF(starsObjects, domStars, timestamp, animStartTime)
    })
}


function animateStarsInRAF(starsObjects, domStars, timestamp, start) {
    const time = (timestamp - start) / SECOND_IN_MS;
    starsObjects.forEach(star => star.move(time))
    domStars.forEach((domStar, i) => styleStar(domStar, starsObjects[i]))
    if (time <= 3) {
        RAF((timestamp) => {
            animateStarsInRAF(starsObjects, domStars, timestamp, start)
        })
    }
}

function styleStar(domStar, starObj) {
    const transformStr = `translateY(${starObj.top}px) translateX(${starObj.left}px)`
    domStar.style.transform = transformStr;
}

function initStarStyle(domStar, starObj, targetStyle) {
    domStar.style.backgroundColor = starObj.color;
    domStar.style.top = `${randomNumberToFixed(starSettings.posTop) - randomNumberToFixed(starSettings.topRandomOffset)}px`
    domStar.style.left = `${randomNumberToFixed(starSettings.posLeft) - randomNumberToFixed(starSettings.leftRandomOffset)}px`
    styleStar(domStar, starObj)
}

function randomNumberToFixed(factor) {
    return (Math.random() * factor).toFixed()
}


class Star {
    constructor(basicCoordinates) {
        const positionOffsetSide = Math.random() >= 0.5 ? 1:  -1
        this.initSpeed = starSettings.initSpeed; /*px/sec */
        this.top = Number((basicCoordinates.y /*+ (Math.random() * 10 *positionOffsetSide) */- basicCoordinates.targetHeight * 2 ).toFixed()) //Number((Math.random() * starSettings.yBasis).toFixed())
        this.left = Number((basicCoordinates.x + (Math.random() * 10 *positionOffsetSide)- basicCoordinates.targetWidth / 2).toFixed())//Number((Math.random() * starSettings.xBasis).toFixed())
        this.initTop = this.top
        this.leftVector = Number(Math.random() * 10);
        this.initBooster = starSettings.upSideBooster;
        this.leftVector = Math.random() >= 0.5 ? -this.leftVector : this.leftVector
        // console.log('this.top ' + this.top + ' this.left ' + this.left)
        this.color = `rgb(${randomNumberToFixed(255)}, ${randomNumberToFixed(255)}, ${randomNumberToFixed(255)})`
        this.disabled = false;
        // console.log('init top is ' + this.initTop)
    }

    move(time) {
        this.top = this.initTop - this.calculateHeight(time);
        this.left = this.left + (this.leftVector)

        this.initBooster--
        if (time > 3) {
            this.disabled = true
            console.log('star disabled!')
        }
        // console.log('top is ' + this.top)
    }

    calculateHeight(time) {
        let height = 0;
        height = ((this.initSpeed * this.initBooster) * time) - (((starSettings.upSideBooster) * time * time * time) / 2)
        // console.log('calculated height :' + height)
        return height
    }
}