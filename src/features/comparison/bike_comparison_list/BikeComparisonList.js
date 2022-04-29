import React from "react";
import { useSelector } from "react-redux";

import ComparisonListContainer from "../comparison_list_container/ComparisonListContainer";
import BikeCard from '../../common/bike_card/BikeCard'
import { bikeCardTypes } from "../../common/bike_card/BikeCardSettings";
import { selectAllBikesEntities } from '../../bikes/newBikeSlice'
import calculateStyles from './comparisonCardStylesCalculations'

export default React.memo( function BikeComparisonList({ setBikeHook, chosenBike, side }) {
    const bikes = useSelector(selectAllBikesEntities);
    const renderedBikes = bikes.map((bike, i) => {
        return <BikeCard bikeCardType={bikeCardTypes.comparisonRow} bike={bike} styles={calculateStyles(chosenBike, i)} key={i} />
    })

    return <ComparisonListContainer setBikeHook={setBikeHook} chosenBike={chosenBike} comparisonList={renderedBikes} side={side} />

})