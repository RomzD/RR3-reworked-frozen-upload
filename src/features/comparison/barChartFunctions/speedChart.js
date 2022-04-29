import * as d3 from "d3";
import { width } from './SVGParams';
import { defineSVGGroups, drawBars, drawChartBackgroundLines, drawValues } from "./chartParts_slice1";
import './SVGStyles.scss'
import { defineGradients, drawDifferenceLables, drawLineNames } from "./chartParts_slice2";
import { extremumStarterValue } from "../../../db/renewedBikeClass";
import { singleElem } from "./SVGParams";

export default function drawSpeedChart(fields, bike1, bike2, elementIndex, typesExtremums) {
    const [field1, field2] = fields;
    const fieldType = field1.type;
    const domainValues = [extremumStarterValue, typesExtremums[fieldType].max]
    const [bikeStatMaxValue1, bikeStatMaxValue2] = [bike1.extremums[fieldType].max, bike2.extremums[fieldType].max]


    const x = d3.scaleLinear(domainValues, [0, width.value])
    const defs = d3.select('svg').selectAll('defs').data(singleElem).join('defs')


    defineGradients(defs, fields, [bike1, bike2], domainValues, typesExtremums[fieldType].max, bikeStatMaxValue1, bikeStatMaxValue2)
    const chart = defineSVGGroups(field1, elementIndex)


    drawChartBackgroundLines(chart, elementIndex)


    drawBars(chart, fields, elementIndex, x)
    drawValues(chart, fields, elementIndex, x)
    drawLineNames(chart, field1, elementIndex)
    drawDifferenceLables(chart, elementIndex, field1, field2, x)

}
