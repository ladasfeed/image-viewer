import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {userPageReducer} from "./userPageReducer";
import {albumsReducer} from "./albumsReducer";

const reducers = combineReducers({
    userPageReducer: userPageReducer.reducer,
    albumsReducer: albumsReducer.reducer
})
export const store = configureStore({
    reducer: reducers
})
export type RootState = ReturnType<typeof store.getState>