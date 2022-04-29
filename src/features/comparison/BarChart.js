import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectBikeById } from '../bikes/newBikeSlice'
import ResizeObserver from 'react-resize-observer';
import drawSpeedChart from "./barChartFunctions/speedChart";
import { widthBasis, recalcDimensions, svgViewBoxRisizePixelBound, viewBoxSizesEnum } from "./barChartFunctions/SVGParams";

export default function BarChart({ bike1Id, bike2Id }) {
    const [viewBoxWidth, setViewBoxWidth] = useState(viewBoxSizesEnum.full)
    const bike1 = useSelector(state => selectBikeById(state, bike1Id));
    const bike2 = useSelector(state => selectBikeById(state, bike2Id));
    const fieldsToDraw = useSelector(state => state.newBikes.comparisonChartFields)
    const typesExtremums = useSelector(state => state.newBikes.statsMinMax)
    useEffect(() => {
        let overallElementIndex = 0;
        if (widthBasis.value !== viewBoxWidth) {
            recalcDimensions(viewBoxWidth)
        }
        for (const section in fieldsToDraw) {
            for (let field of fieldsToDraw[section]) {

                const bike1Field = bike1[section][field]
                const bike2Field = bike2[section][field]
                const fields = [bike1Field, bike2Field]
                drawSpeedChart(fields, bike1, bike2, overallElementIndex, typesExtremums)
                overallElementIndex++
            }
        }
    }, [bike1Id, bike2Id, fieldsToDraw, typesExtremums, bike1, bike2, setViewBoxWidth, viewBoxWidth]
    )
    return (


        <svg className="svg" preserveAspectRatio="xMinYMin meet" viewBox={`0 0 ${viewBoxWidth} 50`}>
            <ResizeObserver onReflow={(svg) => {
                if (svg.width > svgViewBoxRisizePixelBound) {
                    if (viewBoxWidth === viewBoxSizesEnum.half) {
                        setViewBoxWidth(viewBoxSizesEnum.full)
                    }
                } else {
                    if (viewBoxWidth === viewBoxSizesEnum.full) {
                        setViewBoxWidth(viewBoxSizesEnum.half)
                    }
                }
            }} />
        </svg>
    )
}