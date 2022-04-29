import * as d3 from "d3";
import { width, margin, transitionDuration as duration, barHeight, lineHeight, getBarVerticalOffset, singleElem, getGradientUrl, hoverGroupBGColor, setColorRelatedOnIndexDependancy } from './SVGParams';
import { chartBGClass, chartBarsClass } from "./chartClassesNamesConsts";

export function drawChartBackgroundLines(chart, elemIndex) {
    chart.selectAll(`.${chartBGClass}`).data(singleElem).join('rect')
        .classed(`${chartBGClass}`, true)
        .attr('width', 100)
        .attr('height', lineHeight * 2)
        .attr('x', 0)
        .attr('y', getBarVerticalOffset(elemIndex))
        .attr('fill', setColorRelatedOnIndexDependancy(elemIndex))
}

export function drawBars(chart, fields, elemIndex, scaleFunction) {

    chart.selectAll(`.${chartBarsClass}`).data(fields).join('rect')
        .classed(`${chartBarsClass}`, true)
        .transition()
        .duration(duration)
        .attr('width', d => scaleFunction(d.numberValue))
        .attr('height', barHeight)
        .attr('y', (d, i) => (i * lineHeight) + getBarVerticalOffset(elemIndex))
        .attr('x', margin.left)
        .attr('fill', (d, i) => getGradientUrl(i, d.name))
}

export function drawValues(chart, fields, elemIndex, scaleFunction) {
    const [field1, field2] = fields
    chart.selectAll(`.${field1.name}-value`).data(fields)
        .join('text').classed(`${field1.name}-value`, true)
        .transition()
        .duration(duration)
        .text(d => d.stringValue)
        .attr('x', d => {
            let position = scaleFunction(d.numberValue);

            if (position) {
                position = Number(position) + margin.left
                return position
            }
            return margin.left
        }
        )
        .attr('y', (d, i) => (i * lineHeight + lineHeight / 1.5) + getBarVerticalOffset(elemIndex))
        .attr('fill', 'black')
}

export function defineSVGGroups(anyField, elemIndex) {
    return d3.select('.svg').selectAll(`.comp-${anyField.name}`).data(singleElem).join('g').classed(`comp-${anyField.name}`, true)
        .attr('width', width.value + margin.left + margin.right)
        .attr('min-width', width.value)
        .attr('x', margin.left)
        .attr('y', margin.top * elemIndex)
        .on('mouseover', function () {
            this.querySelector('.chart-background')?.setAttribute('fill', hoverGroupBGColor)
        })
        .on('mouseout', function () {
            this.querySelector('.chart-background')?.setAttribute('fill', setColorRelatedOnIndexDependancy(elemIndex))
        })
}