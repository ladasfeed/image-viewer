import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initialStateType} from "./types";
import {AlbumType, PhotosObjectType, PhotoType, UserType} from "../types";
import {RootState} from "../index";

const initialState: initialStateType = {
    chosenUser: {
        id: null,
        name: null,
        username: null,
        email: null,
        address: {
            street: null,
            suite: null,
            city: null,
            zipcode: null,
            geo: {
                lat: null,
                lng: null
            }
        },
        phone: null,
        website: null,
        company: {
            name: null,
            catchPhrase: null,
            bs: null
        }
    },
    photosObject: {
        photos: [],
        isLoading: false
    },
    albums: [],
    usersList: []
}

export const userPageReducer = createSlice({
    name: 'userPageReducer',
    initialState: initialState,
    reducers: {
        setUserList: (state: initialStateType, {payload}: PayloadAction<Array<UserType>>) => {
            state.usersList = payload
        },
        setCurrentUser: (state: initialStateType, {payload}: PayloadAction<UserType>) => {
            state.chosenUser = payload
        },
        setUserPhotos: (state: initialStateType, {payload}: PayloadAction<PhotosObjectType>) => {
            state.photosObject = payload
        },
        setUsersAlbums: (state: initialStateType, {payload}: PayloadAction<Array<AlbumType>>) => {
            state.albums = payload
        },
    }
})

export const userPageSelectors = {
    getUsersList: (state: RootState) => state.userPageReducer.usersList,
    getCurrentUser: (state: RootState) => state.userPageReducer.chosenUser,
    getUserPhotos: (state: RootState) => state.userPageReducer.photosObject,
    getUsersAlbums: (state: RootState) => state.userPageReducer.albums,
}

export const userPageActions = userPageReducer.actions