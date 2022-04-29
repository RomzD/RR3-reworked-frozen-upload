import React, { useState } from "react";


import ComparisonVersusMenu from "../features/comparison/comparison_versus_menu//ComparisonVersusMenu";
import BarChart from "../features/comparison/BarChart";
import StarList from '../features/animations/falling_stars_on_click/StarList'
import './BikeComparisonPage.scss'
export default function BikeComparisonPage() {
    const [bike1, setBike1] = useState(0);
    const [bike2, setBike2] = useState(1);

    

    return (
        <section id="bike-comparison" className="page-container page-container_noisy page-container_paddingtop5vh">
            <StarList  />
            <ComparisonVersusMenu chosenBikes={[bike1, bike2]} setBikes={[setBike1, setBike2]} />
            <BarChart bike1Id={bike1} bike2Id={bike2} />
        </section>

    )
}