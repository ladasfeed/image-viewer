import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initialStateType} from "./types";
import {AlbumType, PhotosObjectType} from "../types";
import {RootState} from "../index";

const initialState: initialStateType = {
    photosObject: {
        photos: [],
        isLoading: false
    },
    albums: [],
    currentAlbum: {} as AlbumType
}

export const albumsReducer = createSlice({
    name: 'albumsReducer',
    initialState: initialState,
    reducers: {
        setPhotos: (state: initialStateType, {payload}: PayloadAction<PhotosObjectType>) => {
            state.photosObject = payload
        },
        setAlbums: (state: initialStateType, {payload}: PayloadAction<Array<AlbumType>>) => {
            state.albums = payload
        },
        setCurrentAlbum: (state: initialStateType, {payload}: PayloadAction<AlbumType>) => {
            state.currentAlbum = payload
        },
    }
})

export const albumsReducerSelectors = {
    getAlbums: (state: RootState) => state.albumsReducer.albums,
    getPhotos: (state: RootState) => state.albumsReducer.photosObject,
    getCurrentAlbum: (state: RootState) => state.albumsReducer.currentAlbum,
}

export const albumsReducerActions = albumsReducer.actions