import {photosApi} from "../../api";
import {Dispatch} from "react";
import {photosPageAction} from "./index";

export const photosPageThunk = () => {

    function getPhotos() {
        return async function (dispatch: Dispatch<any>) {
            dispatch(photosPageAction.setPhotos({
                photos: [],
                isLoading: true
            }))
            const response = await photosApi.getAllPhotos()

            switch (response.status) {
                case 200:
                    dispatch(photosPageAction.setPhotos({
                        photos: response.data,
                        isLoading: false
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