import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {carReducer} from "./slice/carSlice";
import exp from "constants";

const rootReducer = combineReducers({
    carReducer
});

const setUpStore=()=>configureStore({
    reducer:rootReducer
});

type RootState=ReturnType<typeof rootReducer>
type AppStore=ReturnType<typeof setUpStore>
type AppDispatch=AppStore['dispatch']

export type{
    RootState,
    AppStore,
    AppDispatch
}

export {
     setUpStore
}