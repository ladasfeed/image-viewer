import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {userPageReducer} from "./userPageReducer";
import {albumsReducer} from "./albumsReducer";
import {photosPageReducer} from "./photosPageReducer";

const reducers = combineReducers({
    userPageReducer: userPageReducer.reducer,
    albumsReducer: albumsReducer.reducer,
    photosPageReducer: photosPageReducer.reducer
})
export const store = configureStore({
    reducer: reducers
})
export type RootState = ReturnType<typeof store.getState>