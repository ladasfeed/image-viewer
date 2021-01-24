import React, {FC} from 'react'
import './style.css'
import {ImageViewer} from "../../ui/ImageViewer";
import {AlbumList} from "./components/AlbumList";
import {useSelector} from "react-redux";
import {albumsReducerSelectors} from "../../../store/albumsReducer";

export const Albums:FC = () => {
    const photosObject = useSelector(albumsReducerSelectors.getPhotos)

    return (
        <section className='Albums two-cols-container'>
            <AlbumList/>
            <ImageViewer photosObject={photosObject}/>
        </section>
    )
}