import React, {FC, useEffect, useRef, useState} from 'react'
import {PhotosObjectType} from "../../../store/types";
import {ImageThumb} from './components/ImageThumb';
import './style.css'
import {Paginator} from "./components/Paginator";
import {PreviewController} from "./components/PreviewController";

const IMAGES_PER_PAGE = 30;

type PropsType = {
    photosObject: PhotosObjectType,
}
export const ImageViewer: FC<PropsType> = (props) => {
    /* state */
    const {
        photosObject
    } = props
    const [currentPage, setCurrentPage] = useState(0)
    const [pagination, setPagination] = useState([0, 1, 2])
    const [chosenImage, setChosenImage] = useState<number | undefined>(undefined)
    const ref = useRef<HTMLDivElement>(null)

    /* methods */
    const generatePage = () => {
        const start = currentPage * IMAGES_PER_PAGE;
        const end = start + IMAGES_PER_PAGE;
        const arrayOfImages = []
        for (let i = start; i < end && i < photosObject.photos.length; i++) {
            arrayOfImages.push(
                <ImageThumb
                    key={i}
                    id={i}
                    image={photosObject.photos[i]}
                        setCurrentImage={setChosenImage}
                />
            )
        }
        return arrayOfImages
    }

    /* effects */
    useEffect(() => {
        setCurrentPage(0)
    }, [photosObject])
    useEffect(() => {
        ref.current!.scrollTo(0, 0)
    }, [currentPage])


    /* view */
    return (
        <div ref={ref} className='ImageViewer'>
            <div className='ImageViewer__title'>Photos</div>
            {
                photosObject.photos.length
                ? <>
                    <Paginator
                        pagination={pagination}
                        setPagination={setPagination}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                    <div className='ImageViewer__list'>
                        {generatePage()}
                    </div>
                    <Paginator
                        pagination={pagination}
                        setPagination={setPagination}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                    <PreviewController
                        chosenImage={chosenImage}
                        photosObject={photosObject}
                        chooseImageHandler={setChosenImage}
                    />
                </> : <></>
            }
        </div>
    )
}