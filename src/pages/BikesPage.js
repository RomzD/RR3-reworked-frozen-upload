import React, { useState } from "react";
import { useSelector } from "react-redux";

import { selectBikeById } from "../features/bikes/newBikeSlice";
import BikeList from "../features/bikes/BikeMenu";
import BikeImage from "../features/bikes/bike_image/BikeImage";
import BikeStats from "../features/bikes/BikeStats";
import './BikesPage.scss'

export default function BikesPage() {
    const [chosenBike, setChosenBike] = useState(0);
    const bike = useSelector(state => selectBikeById(state, chosenBike));


    const onBikeCardButtonClicked = (e) => {
        if (e.target.classList.contains('bike-card')) {
            const bikeId = e.target.value;
            if (bikeId !== chosenBike) {
                document.querySelector('[class*=bike-card_theme-chosen]')?.classList.remove('bike-card_theme-chosen')
                e.target.classList.add('bike-card_theme-chosen')
                setChosenBike(bikeId);
            }
        }
    }

    return (
        <>
            <section id="bikes" onClick={onBikeCardButtonClicked} className="page-container page-container_max-height-fullHD ">
                <BikeList />
                <div  className="bike-view-container">
                    <div className="bike-stat-container"><BikeStats bike={bike} /> </div>
                    <div className="bike-image-container"> <BikeImage bike={bike} /> </div>
                </div>
            </section>
        </>
    )
}