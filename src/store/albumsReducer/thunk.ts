import {albumsApi, photosApi} from "../../api";
import {Dispatch} from "react";
import {RootState} from "../index";
import {albumsReducerActions} from "./index";
import {IGetPhotosByAlbum} from "../../api/types";
import {thunkConnectorType} from "../../hooks/useThunkConnector";

export const albumsThunk = () => {

    function getAlbums(thunkConnector: thunkConnectorType) {
        return async function (dispatch: Dispatch<any>, getState: () => RootState) {
            thunkConnector.loading.set(true)
            const response = await albumsApi.getAlbums()

            switch (response.status) {
                case 200:
                    dispatch(albumsReducerActions.setAlbums(response.data))
                    thunkConnector.loading.set(false)
                    break
                default:
                    break
            }
        }
    }

    function getPhotosByAlbum(props: IGetPhotosByAlbum) {
        return async function (dispatch: Dispatch<any>) {
            dispatch(albumsReducerActions.setPhotos({
                photos: [],
                isLoading: true
            }))
            const response = await photosApi.getPhotosByAlbum({
                albumId: props.albumId
            })

            switch (response.status) {
                case 200:
                    dispatch(albumsReducerActions.setPhotos({
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
        getAlbums,
        getPhotosByAlbum
    }
}