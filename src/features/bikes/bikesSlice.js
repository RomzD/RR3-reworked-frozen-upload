import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

import { bikesObjects } from "../../db/bikes_data";
const bikesAdapter = createEntityAdapter();

const initialState = bikesAdapter.getInitialState({ entities: bikesObjects });

const bikesSlice = createSlice({
    name: 'bikes',
    initialState,
    reducers: {
    }
})

export const {
    selectAll: selectAllBikes,
    selectById: selectBikeById,
    selectIds: selectBikeIds
} = bikesAdapter.getSelectors(state => state.posts)

export const getAllCategores = state => (
    state.bikes.entities.reduce((categories, bike) => {
        if (!categories.includes(bike.category)) {
            categories.push(bike.category)
        }
        return categories
    }, [])
)

export const bikesReducer = bikesSlice.reducer;