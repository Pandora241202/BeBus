import { configureStore } from "@reduxjs/toolkit";
import startRouteReducer from "./startRoute";

export default configureStore({
    reducer: {
        startRoute: startRouteReducer,
    }
})