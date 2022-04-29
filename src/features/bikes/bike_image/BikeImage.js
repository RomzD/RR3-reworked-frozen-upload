import React, { useEffect, useMemo } from "react";
import { imageHoverTransformation } from "../../transform_animations/mouse_hover_perspective/hoverPerspectiveFunctions";
import { createDefaultRotationAnglesString } from "../../transform_animations/mouse_hover_perspective/hoverPerspectiveSettings";
import setDefaultElementView from '../../transform_animations/mouse_hover_perspective/setDefaultElementView'
import neonAnimation from "../../animations/color_flow/neonAnimation";
import { BikeImageCubicalSides } from "./BikeCubicalImage";
import { rotate180deg } from "../../transform_animations/rotate_180deg/rotate180Anim";
import { cssProps } from "../../animations/color_flow/animSettings";
import BikeFeatureList from "../../common/bike_feature_list/BikeFeatureList";
import { bikeFeatureListTypes } from "../../common/bike_feature_list/BikeFeatureListSettings";

import './BikeImage.scss'


export default function BikeImage({ bike }) {
    const backgroundImage = `url('${require(`../../../img/${bike.name}.png`).default}')`
    const defaultBikeImagePosition = createDefaultRotationAnglesString(0, -20);
    const bikeFeatures = useMemo(() => bike.getStatsByType(bike.statsTypes.ingame), [bike])
        
    useEffect(() => {
        const bikeNameDiv = document.querySelector(`.bike-image__bike-name`)
        const neonShadowDiv = document.querySelector('.bike-image__neon-shadow')
        neonAnimation(bikeNameDiv, cssProps.color, bike.category)
        neonAnimation(neonShadowDiv, cssProps.background, bike.category)
    })

    return (
        <div
            onClick={(e) => { rotate180deg(e.currentTarget) }}
            onMouseLeave={(e) => { setDefaultElementView(e.currentTarget, defaultBikeImagePosition) }}
            className="bike-image"
        >

            <div className="bike-image__neon-shadow"></div>
            <div className="bike-image__img" style={{ backgroundImage }}></div>
            <div className="bike-image__bike-name">{bike.name}</div>

            <div onMouseMove={(e) => { imageHoverTransformation(e) }}
                className="bike-image__transparent-cover"></div>
            <BikeFeatureList features={bikeFeatures} listType={ bikeFeatureListTypes.bikeImage } />
            <BikeImageCubicalSides bike={bike} />
        </div>
    )
}


