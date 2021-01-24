import React, {FC, useEffect} from 'react'
import './style.css'
import {useDispatch, useSelector} from "react-redux";
import {photosPageSelectors} from "../../../store/photosPageReducer";
import {ImageViewer} from "../../ui/ImageViewer";
import {photosPageThunk} from "../../../store/photosPageReducer/thunk";
import {useThunkConnector} from "../../../hooks/useThunkConnector";

export const Photos:FC = () => {
    const photosObject = useSelector(photosPageSelectors.getPhotos)
    const thunk = photosPageThunk()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(thunk.getPhotos())
    }, [])

    return (
        <section className='Photos fade-in'>
            <ImageViewer photosObject={photosObject}/>
        </section>
    )
}