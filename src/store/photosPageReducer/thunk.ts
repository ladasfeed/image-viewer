import {photosApi} from "../../api";
import {Dispatch} from "react";
import {RootState} from "../index";
import {photosPageAction} from "./index";
import {IGetPhotosByAlbum} from "../../api/types";

export const photosPageThunk = () => {


    function getPhotos() {
        return async function (dispatch: Dispatch<any>, getState: () => RootState) {
            dispatch(photosPageAction.setPhotos({
                photos: [],
                isLoading: true
            }))
            const response = await photosApi.getAllPhotos()

            switch (response.status) {
                case 200:
                    dispatch(photosPageAction.setPhotos({
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
        getPhotos
    }
}