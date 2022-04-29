import React from 'react'
import { useSelector } from 'react-redux';

import { selectAllBikesEntities } from './newBikeSlice'
import BikeCard from '../common/bike_card/BikeCard';
import { bikeCardTypes } from '../common/bike_card/BikeCardSettings';
import './BikeMenu.scss'


export default function BikeList() {
    const bikes = useSelector(selectAllBikesEntities);
    const renderedBikes = bikes.map((bike, index) => <BikeCard key={index} bikeCardType={bikeCardTypes.vinylRow} bike={bike} />)
    return (
        <div className="bike-list-container">
            {renderedBikes}
        </div>
    )
}
