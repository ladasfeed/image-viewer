import React, {FC} from 'react'
import './style.css'
import {usePortal} from "../../../../../hooks/usePortal";
import ReactDOM from "react-dom";
import {useHistory} from 'react-router-dom'
import {PhotosObjectType} from "../../../../../store/types";
import {Image} from "../../../Image";
import {useDispatch} from "react-redux";
import {albumsReducerActions} from "../../../../../store/albumsReducer";

type PropsType = {
    photosObject: PhotosObjectType,
    chosenImage: number | undefined,
    chooseImageHandler: (value: number | undefined) => void
}
export const PreviewController: FC<PropsType> = (props) => {
    /* state */
    const {
        photosObject,
        chosenImage,
        chooseImageHandler
    } = props
    const target = usePortal('App')

    /* methods */
    const closePreview = () => {
        chooseImageHandler(undefined)
    }
    const nextImage = () => {
        const current = Number(chosenImage)
        chooseImageHandler(
            (current+1)%photosObject.photos.length
        )
    }
    const prevImage = () => {
        const current = Number(chosenImage)
        chooseImageHandler(current ? current-1 : 0)
    }

    if (chosenImage === undefined) return <></>
    return ReactDOM.createPortal(
        <div className='PreviewController'>
            <button
                className='PreviewController__close'
                onClick={closePreview}
            >
                Close
            </button>
            <div className='PreviewController__image-block'>
                <span onClick={prevImage}/>
                <Image
                    src={photosObject.photos[chosenImage].url as string}
                    title={photosObject.photos[chosenImage].title as string}
                />
                <span onClick={nextImage}/>
            </div>
        </div>,
        target)
}