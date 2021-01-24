import React, {FC, useEffect, useRef, useState} from 'react'
import {PhotosObjectType} from "../../../store/types";
import {ImageThumb} from './components/ImageThumb';
import './style.css'
import {Paginator} from "./components/Paginator";
import {PreviewController} from "./components/PreviewController";
import {usePaginator} from "../../../hooks/usePaginator";

const IMAGES_PER_PAGE = 30;

type PropsType = {
    photosObject: PhotosObjectType,
}
export const ImageViewer: FC<PropsType> = (props) => {
    /* state */
    const {
        photosObject
    } = props
    const paginator = usePaginator()
    const [chosenImage, setChosenImage] = useState<number | undefined>(undefined)
    const ref = useRef<HTMLDivElement>(null)

    /* methods */
    const getPageImages = () => {
        const start = paginator.currentPage * IMAGES_PER_PAGE;
        const end = start + IMAGES_PER_PAGE;
        const arrayOfImages = []
        for (let i = start; i < end && i < photosObject.photos.length; i++) {
            arrayOfImages.push(photosObject.photos[i])
        }
        return arrayOfImages
    }

    /* effects */
    useEffect(() => {
        paginator.refresh()
    }, [photosObject])
    useEffect(() => {
        ref.current!.scrollTo(0, 0)
    }, [paginator.currentPage])


    /* view */
    return (
        <div ref={ref} className='ImageViewer'>
            <div className='ImageViewer__title'>Photos</div>
            {
                !!photosObject.photos.length
                && <>
                    <Paginator {...paginator}/>
                    <div className='ImageViewer__list'>
                        {getPageImages().map((item, index) => (
                            <ImageThumb
                                key={index}
                                id={index}
                                image={item}
                                setCurrentImage={setChosenImage}
                            />
                        ))}
                    </div>
                    {!!getPageImages().length && <Paginator {...paginator}/>}
                    <PreviewController
                        chosenImage={chosenImage}
                        photosObject={photosObject}
                        chooseImageHandler={setChosenImage}
                    />
                </>
            }
        </div>
    )
}