import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {userPageReducer} from "./userPageReducer";

const reducers = combineReducers({
    userPageReducer: userPageReducer.reducer
})
export const store = configureStore({
    reducer: reducers
})
export type RootState = ReturnType<typeof store.getState>