import React, { useMemo } from "react"
import BikeFeatureList from "../../common/bike_feature_list/BikeFeatureList"
import { bikeFeatureListTypes } from "../../common/bike_feature_list/BikeFeatureListSettings"
import './BikeCubicalImage.scss'


export function BikeImageCubicalSides({ bike }) {

    const bikeFeatures = useMemo(() =>(
        [
            {
                displayName: 'category',
                stringValue: bike.category
            },
            {
                displayName: 'description',
                stringValue: bike.desc
            }            
        ]), [bike]
    )

    return (
        <>
            <div className="side side__back">
                <BikeFeatureList features={bikeFeatures} listType={bikeFeatureListTypes.bikeImageBack} />
            </div>
            <div className="side side__bottom"></div>
            <div className="side side__top"></div>
            <div className="side side__right"></div>
            <div className="side side__left"></div>
        </>
    )
}