import React from "react"

import { commonClassesForAllRecords } from './BikeFeatureRecordSettings'
import './BikeFeature.scss'

export const BikeFeatureRecord = ({ feature, specificClasses }) => {
    return (<div className={`${commonClassesForAllRecords.container} ${specificClasses.container}`}>
        <div className={`${commonClassesForAllRecords.header} ${specificClasses.header}`}>{feature.displayName}</div>
        <div className={`${commonClassesForAllRecords.value}  ${specificClasses.value}`}>{feature.stringValue}</div>
    </div>
    )
}
