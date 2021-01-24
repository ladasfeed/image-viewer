import React, {FC, useState} from 'react'
import {PhotoType} from "../../../../../store/types";
import './style.css'
import cn from 'classnames'

type PropsType = {
    image: PhotoType,
    setCurrentImage: (id: number) => void,
    id: number
}
export const ImageThumb:FC<PropsType> = (props) => {
    const {
        image,
        setCurrentImage,
        id
    } = props
    const [loading, setLoading] = useState(true)

    /* methods */
    const onLoad = () => {
        setLoading(false)
    }
    const chooseImage = () => {
        setCurrentImage(Number(id))
    }


    return (
        <div className={cn('ImageThumb', {
            'ImageThumb--loading': loading
        })}>
            <div className='ImageThumb__text'>Loading</div>
            <img
                onLoad={onLoad}
                onClick={chooseImage}
                src={image.thumbnailUrl as string}
            />
        </div>
    )
}