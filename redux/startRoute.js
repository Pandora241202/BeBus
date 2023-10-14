import { createSlice } from "@reduxjs/toolkit";

export const startRouteSlice = createSlice({
    name: "startRoute",
    initialState: {
        route: {}
    },
    reducers: {
        set: (state, action) => {
            state.route = action.payload
        },
        start: (state) => {
            state.route = {...state.route, "start": true}
        },
        end: (state) => {
            state.route = {...state.route, "start": false}
        },
        clear: (state) => {
            state.route = {}
        },
    }
})

export const { set, start, end } = startRouteSlice.actions;

export default startRouteSlice.reducer;