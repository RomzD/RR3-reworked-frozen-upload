import React from 'react'
import { useSelector } from 'react-redux';
import { selectAllBikesEntities } from '../bikes/newBikeSlice';
import calculateStyles from './comparison_versus_menu/comparisonCardStylesCalculations';
import './ComparisonVersusCard.scss'

export default function ComparisonVersusCard({ chosenBike, theme }) {
    const bikes = useSelector(selectAllBikesEntities);
    const renderedBikes = bikes.map((bike, i) => {
        if (chosenBike === i) {
            return <Card theme={theme} key={i} bike={bike} />
        }

        return <Card style={calculateStyles(chosenBike, i)} theme={theme} key={i} bike={bike} />
    })

    return (
        <>
            {renderedBikes}
        </>
    )
}

const Card = ({ bike, style, theme }) => {
    const image = require(`../../img/${bike.name}.png`).default;
    return (
        <div value={bike.id} className={`versus-bike-card ${theme === 'blue' ? 'versus-bike-card_theme-blue' : ''}`}
            style={{
                backgroundImage: `url('${image}')`,
                ...style
            }}
        >
            <div className={`versus-bike-card__name versus-bike-card__name_theme-${bike.category}`}
            >{bike.name}</div>
        </div>
    )
}
