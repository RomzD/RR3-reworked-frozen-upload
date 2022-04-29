import * as d3 from "d3";
import {
    transitionDuration as duration,
    lineHeight,
    differenceLableOffset,
    getBarVerticalOffset,
    singleElem,
    bikesColors,
    statNameLableOffset,
    differenceLableAnimationColors,
    buildGradientId,
    calcGradientOffsetPointInPercent
} from './SVGParams';


export function drawLineNames(chart, anyField, elementIndex) {

    chart.selectAll(`.${anyField.name}-name-lable`).data(singleElem).join('text')
        .classed(`${anyField.name}-name-lable`, true)
        .attr('x', statNameLableOffset.value)
        .attr('y', getBarVerticalOffset(elementIndex) + lineHeight)
        .text(anyField.displayName)

}

export function drawDifferenceLables(chart, elemIndex, field1, field2) {
    chart.selectAll(`.${field1.name}-difference-lable`).data(singleElem).join('text')
        .classed(`${field1.name}-difference-lable`, true)
        .transition()
        .attrTween('fill', () => d3.interpolateRgb(...differenceLableAnimationColors))
        .duration(duration)
        .attr('x',  differenceLableOffset.x)
        .textTween(function () {
            const prevoiusLableValue = Number(this.getAttribute('previous'))
            const currentValueDifference = field1.numberValue - field2.numberValue
            const interpolator = d3.interpolateRound(prevoiusLableValue, currentValueDifference)
            if (currentValueDifference === 0 && (field1.numberValue !== 0 && field2.numberValue !== 0)) {
                return interpolator
            }

            if ((currentValueDifference === 0 || prevoiusLableValue === 0) && (field1.numberValue === 0 || field2.numberValue === 0)) {
                return null
            }
            return interpolator
        })
        .attr('y', getBarVerticalOffset(elemIndex) + differenceLableOffset.y)
        .transition()
        .text(function () {
            this.setAttribute('previous', this.textContent)
            const currentValue = field1.numberValue - field2.numberValue
            if (field1.numberValue === 0 || field2.numberValue === 0) {
                return ''
            }

            if (currentValue > 0) {
                return '+' + currentValue
            }
            return currentValue;
        })
        .attr('text-anchor', 'start')

}


export function defineGradients(defs, fields, bikes, domainValues, extremum, bike1Extremum, bike2Extremum) {

    const [field1, field2] = fields
    const bike1ScaleColor = d3.scaleLinear(domainValues, [bikesColors.fisrtBike.start, bikesColors.fisrtBike.end])
    const bike2ScaleColor = d3.scaleLinear(domainValues, [bikesColors.secondBike.start, bikesColors.secondBike.end])


    defs.selectAll(`linearGradient[id$="${field1.name}"]`).data(bikes).join('linearGradient')
        .attr('id', (d, i) => buildGradientId(i, field1.name))
        .attr('x1', 0) /* was '0' as string*/
        .attr('y1', 0)
        .selectAll('stop')
        .data((d, i) => {
            return ([
                {
                    offset: '0%', color: i === 0 ?
                        bikesColors.fisrtBike.start :
                        bikesColors.secondBike.start
                },
                {
                    offset: i === 0 ?
                        calcGradientOffsetPointInPercent(bike1Extremum, extremum) :
                        calcGradientOffsetPointInPercent(bike2Extremum, extremum),
                    color: i === 0 ?
                        bike1ScaleColor(field1.numberValue) :
                        bike2ScaleColor(field2.numberValue)
                }
            ]
            )
        }
        )
        .join('stop')
        .attr("offset", function (d) { return d.offset; })
        .attr("stop-color", function (d) { return d.color; });
}


// export function defineGradients(defs, bikes, domainValues, min, max) {

//     const bike1Color = 'rgb(216, 17, 197)';
//     const bike2Color = 'lightgreen';

//     let bike1ScaleColor = d3.scaleLinear([min, max], [bike1Color, 'rgb(247, 186, 92)'])
//     let bike2ScaleColor = d3.scaleLinear([min, max], [bike2Color, 'rgb(91, 166, 247)'])
//     const bike1LineLengthPercent = domainValues[0] / max * 100;
//     const bike2LineLengthPercent = domainValues[1] / max * 100;


//     defs.selectAll(`linearGradient[id$="${statName}"]`).data([0, 1]).join('linearGradient')
//         .attr('id', (d, i) => `bike${i + 1}${statName}`)
//         .attr('x1', `0`)
//         .attr('y1', `0`)
//         .selectAll('stop')
//         .data((d, i) => {
//             return ([
//                 { offset: '0%', color: i === 0 ? bike1Color : bike2Color },
//                 { offset: i === 0 ? `${bike1LineLengthPercent}` : `${bike2LineLengthPercent}%`, color: i === 0 ? bike1ScaleColor(bikes[0][`${statName}Number`]) : bike2ScaleColor(bikes[1][`${statName}Number`]) }
//             ]
//             )
//         }
//         )
//         .join('stop')
//         .attr("offset", function (d) { return d.offset; })
//         .attr("stop-color", function (d) { return d.color; });
// }