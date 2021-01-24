import React, {FC} from 'react'
import {PhotoType} from "../../../../../store/types";
import './style.css'
import {Image} from "../../../Image";

type PropsType = {
    image: PhotoType,
    setCurrentImage: (id: number) => void,
    id: number
}
export const ImageThumb: FC<PropsType> = (props) => {
    const {
        image,
        setCurrentImage,
        id
    } = props

    const chooseImage = () => {
        setCurrentImage(Number(id))
    }

    return (
        <Image
            onClick={chooseImage}
            src={image.thumbnailUrl as string}
        />
    )
}