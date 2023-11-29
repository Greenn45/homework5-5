import {configureStore} from "@reduxjs/toolkit";
import {calcReducer} from "../page/MainPage/calcSlice";
export const store = configureStore({
    reducer: {
        calc: calcReducer
    }
})