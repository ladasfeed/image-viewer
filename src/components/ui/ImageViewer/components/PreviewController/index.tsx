import React, {FC} from 'react'
import './style.css'
import {usePortal} from "../../../../../hooks/usePortal";
import ReactDOM from "react-dom";
import {useHistory} from 'react-router-dom'
import {PhotosObjectType} from "../../../../../store/types";

type PropsType = {
    photosObject: PhotosObjectType,
    chosenImage: number,
    chooseImageHandler: (value:number) => void
}
export const PreviewController:FC<PropsType> = (props) => {
    /* state */
    const {
        photosObject,
        chosenImage,
        chooseImageHandler
    } = props
    const target = usePortal('App')
    const history = useHistory()

    console.log(photosObject.photos[chosenImage])

    /* methods */
    const closePreview = () => {
        chooseImageHandler(0)
    }
    const goToAlbum = () => {
        history.push('/albums')
    }

    if (!chosenImage) return <></>
    return ReactDOM.createPortal(
            <div className='PreviewController'>
                <div
                    className='PreviewController__close'
                    onClick={closePreview}
                >
                    Close
                </div>
                <div className='PreviewController__image-block'>
                    <img src={photosObject.photos[chosenImage].url as string}/>
                    <div onClick={goToAlbum}>Перейти к альбому...</div>
                </div>
            </div>,
        target)
}