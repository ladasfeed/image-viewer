import React, {FC} from 'react'
import {PhotosObjectType} from "../../../store/types";

type PropsType = {
    photosObject: PhotosObjectType
}
export const ImageViewer: FC<PropsType> = (props) => {
    const {
        photosObject
    } = props

    if (!photosObject) return (
        <div>Choose album</div>
    )

    return (
        <div className='ImageViewer'>
            {photosObject.photos.map((photo, index) => (
                <img
                    alt='Photo'
                    key={index}
                    src={photo.url as string}
                />
            ))}
        </div>
    )
}