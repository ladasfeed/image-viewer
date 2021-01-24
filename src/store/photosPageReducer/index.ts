import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initialStateType} from "./types";
import {PhotosObjectType} from "../types";
import {RootState} from "../index";

const initialState: initialStateType = {
    photosObject: {
        photos: [],
        isLoading: false
    },
}

export const photosPageReducer = createSlice({
    name: 'albumsReducer',
    initialState: initialState,
    reducers: {
        setPhotos: (state: initialStateType, {payload}: PayloadAction<PhotosObjectType>) => {
            state.photosObject = payload
        },
    }
})

export const photosPageSelectors = {
    getPhotos: (state: RootState) => state.photosPageReducer.photosObject,
}

export const photosPageAction = photosPageReducer.actions