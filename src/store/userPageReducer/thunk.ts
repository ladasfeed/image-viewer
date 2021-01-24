import {albumsApi, photosApi, userPageApi} from "../../api";
import {Dispatch} from "react";
import {RootState} from "../index";
import {userPageReducer, userPageSelectors} from "./index";
import {IGetPhotosByAlbum, IGetSomethingByUser} from "../../api/types";
import {thunkConnectorType} from "../../hooks/useThunkConnector";

export const userPageThunk = () => {

    function getUsers() {
        return async function(dispatch: Dispatch<any>) {
            const response = await userPageApi.getUsers()
            switch (response.status) {
                case 200:
                    dispatch(userPageReducer.actions.setUserList(response.data))
                    break
                default:
                    break
            }
        }
    }

    function getUserAlbums(props: IGetSomethingByUser, thunkConnector: thunkConnectorType) {
        return async function(dispatch: Dispatch<any>) {
            thunkConnector.loading.set(true)
            const response = await albumsApi.getAlbumsByUser({
                userId: props.userId
            })

            switch (response.status) {
                case 200:
                    dispatch(userPageReducer.actions.setUsersAlbums(response.data))
                    thunkConnector.loading.set(false)
                    break
                default:
                    break
            }
        }
    }

    function getPhotosByAlbum(props: IGetPhotosByAlbum) {
        return async function(dispatch: Dispatch<any>) {
            dispatch(userPageReducer.actions.setUserPhotos({
                photos: [],
                isLoading: true
            }))
            const response = await photosApi.getPhotosByAlbum({
                albumId: props.albumId
            })

            switch (response.status) {
                case 200:
                    dispatch(userPageReducer.actions.setUserPhotos({
                        photos: response.data,
                        isLoading: true
                    }))
                    break
                default:
                    break
            }
        }
    }

    function getPhotosByUser(props: IGetSomethingByUser) {
        return async function(dispatch: Dispatch<any>) {
            dispatch(userPageReducer.actions.setUserPhotos({
                photos: [],
                isLoading: true
            }))
            const response = await photosApi.getPhotosByUser({
                userId: props.userId
            })

            switch (response.status) {
                case 200:
                    dispatch(userPageReducer.actions.setUserPhotos({
                        photos: response.data,
                        isLoading: true
                    }))
                    break
                default:
                    break
            }
        }
    }

    return {
        getUsers,
        getUserAlbums,
        getPhotosByAlbum,
        getPhotosByUser
    }
}