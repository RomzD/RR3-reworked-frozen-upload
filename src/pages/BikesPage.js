import React from "react";

import BikesCategories from '../features/bikes/BikesCategories'
import style from './BikesPage.module.css'

export default function BikesPage() {


    return (
        <div className={style.pageContainer}>
        <BikesCategories />
        </div>
    )
}