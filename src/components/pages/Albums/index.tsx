import React, {FC, useEffect} from 'react'
import './style.css'
import {ImageViewer} from "../../ui/ImageViewer";
import {AlbumList} from "./components/AlbumList";
import {useDispatch, useSelector} from "react-redux";
import {albumsReducerActions, albumsReducerSelectors} from "../../../store/albumsReducer";

export const Albums:FC = () => {
    const photosObject = useSelector(albumsReducerSelectors.getPhotos)
    const dispatch = useDispatch()

    /* clean */
    useEffect(() => {
        return () => {
            dispatch(albumsReducerActions.setPhotos({
                photos: [],
                isLoading: false
            }))
        }
    },[])

    /* view */
    return (
        <section className='Albums two-cols-container fade-in'>
            <AlbumList/>
            <ImageViewer photosObject={photosObject}/>
        </section>
    )
}