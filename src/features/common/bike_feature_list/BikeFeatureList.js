import { BikeFeatureRecord } from "../bike_feature_record/BikeFeatureRecord";
import { commonListClasses, specificListClasses } from "./BikeFeatureListSettings";
import { specificRecordClasses } from "../bike_feature_record/BikeFeatureRecordSettings";
export default function BikeFeatureList({ features, listType }) {
    const particularListClasses = specificListClasses[listType]
    const particularRecordClasses = specificRecordClasses[listType]
    return (
        <div className={`${commonListClasses.container} ${particularListClasses.container}`}>
            {features.map((feature, i) => <BikeFeatureRecord key={i} feature={feature} specificClasses={particularRecordClasses} />)}
        </div>
    )
}