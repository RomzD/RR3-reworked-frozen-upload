import React from "react";

import DecorativeDivCorners from "../common/decorative_div_corners/DecorativeDivCorners";
import BikeFeatureList from "../common/bike_feature_list/BikeFeatureList";
import { bikeFeatureListTypes } from "../common/bike_feature_list/BikeFeatureListSettings";
import '../common/bike_feature_record/BikeFeature.scss'


export default function BikeStats({ bike }) {
    const speedStats = bike.getStatsByType(bike.statsTypes.speed)
    const partsStats = bike.getStatsByType(bike.statsTypes.parts)
    return (
        <div className="bike-feature-section-container">      
            <DecorativeDivCorners />
            <div className="bike-feature-container bike-feature-container_inner">
                <div className="feature-header">Specs</div>
                <BikeFeatureList  features={speedStats} listType={bikeFeatureListTypes.bikeTable}/>
            </div>
            <div className="bike-feature-container_inner">
                <div className="feature-header">Parts</div>
                <BikeFeatureList  features={partsStats} listType={bikeFeatureListTypes.bikeTable}/>
               
            </div>
        </div>
    )
}