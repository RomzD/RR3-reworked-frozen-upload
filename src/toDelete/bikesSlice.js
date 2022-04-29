// import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

// import { bikeEntitites, bikesIds } from "../db/bikes_data";
// const bikesAdapter = createEntityAdapter();

// const initialState = bikesAdapter.getInitialState({ ids: bikesIds, entities: bikeEntitites });

// const bikesSlice = createSlice({
//     name: 'bikes',
//     initialState,
//     reducers: {
//     }
// })

// export const {
//     selectAll: selectAllBikes,
//     selectById: selectBikeById,
//     selectIds: selectBikeIds
// } = bikesAdapter.getSelectors(state => state.bikes)

// export const selectAllCategores = state => (
//     state.bikes.entities.reduce((categories, bike) => {
//         if (!categories.includes(bike.category)) {
//             categories.push(bike.category)
//         }
//         return categories
//     }, [])
// )


// export const bikesReducer = bikesSlice.reducer;