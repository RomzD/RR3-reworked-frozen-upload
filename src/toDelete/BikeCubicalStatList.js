import './BikeStats.scss'
import { CubicalStatRecord } from './BikeCubicalRecord'


export const CubicalStatList = ({ bike }) => {
    let counter = 1;
    return (
        <div className="ingame-stat-container ingame-stat-container_theme-cubical-back">
             <CubicalStatRecord key={counter} name={'category'} value={bike.category} />
             <CubicalStatRecord key={++counter} name={'description'} value={bike.desc} />
        </div>
    )
}