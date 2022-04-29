import { createEntityAdapter, createSlice, createSelector } from "@reduxjs/toolkit";
import { extremumStarterValue } from "../../db/renewedBikeClass";
import { statTypes, CreateBike } from '../../db/renewedBikeClass'

const bikesAdapter = createEntityAdapter(
    {
        selectIds: bike =>bike.id
    }
)
const initialState = bikesAdapter.getInitialState({
    statsMinMax: null,
    comparisonChartFields: null
})

const newBikesSlice = createSlice({
    name: 'newBikes',
    initialState,
    reducers: {
        addBikeCollection: (state, action) => {
            bikesAdapter.addMany(state, action.payload);
        },
        calculateMinMax: (state, action) => {
            const bikesEntities = state.entities
            const bikesIds = state.ids
            const extremums = bikesIds.reduce((acc, id) => {
                const bike = bikesEntities[id];
                for (const extremum in acc) {
                    const bikeExtremum = bike.extremums[extremum].max
                    const currentMaxValue = acc[extremum].max;
                    acc[extremum].max =  returnBiggerNumber(bikeExtremum, currentMaxValue)
                }

                return acc
            }, buildReducerAcc(statTypes))
            state.statsMinMax = extremums
        },
        addChartFields: (state, action) => {
            const firstBikeId = 0;
            const anyBike = state.entities[firstBikeId]
            state.comparisonChartFields = CreateBike.getComparisonChartFieldsArray(anyBike)
        }
    }
})


export const {
    selectAll: selectAllBikesEntities,
    selectById: selectBikeById,
    selectIds: selectBikesIds
} = bikesAdapter.getSelectors(state => state.newBikes);

export const selectAllBikesStatsByType = createSelector(
    [(state, statType) => statType, selectAllBikesEntities, selectBikesIds],
    (statType, bikesEntities, bikesIds) => {
        return bikesIds.map(id => (
            bikesEntities[id][statType]
        ))
    }
)

export const { addBikeCollection, calculateMinMax, addChartFields } = newBikesSlice.actions;
export const newBikesReducer = newBikesSlice.reducer;


function buildReducerAcc(statTypes) {
    return Object.keys(statTypes).reduce((acc, type) => {
        acc[type] = { max: extremumStarterValue }
        return acc
    }, {})

}

function returnBiggerNumber(a, b) {
    return a >= b ? a : b;
}