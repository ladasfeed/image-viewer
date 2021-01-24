import React, {FC, useEffect} from 'react'
import './style.css'
import {useDispatch, useSelector} from "react-redux";
import {albumsReducerSelectors} from "../../../../../store/albumsReducer";
import {albumsThunk} from "../../../../../store/albumsReducer/thunk";
import {useThunkConnector} from "../../../../../hooks/useThunkConnector";
import {Album} from "../../../../ui/Album";

export const AlbumList:FC = () => {
    /* state */
    const albums = useSelector(albumsReducerSelectors.getAlbums)
    const thunk = albumsThunk()
    const dispatch = useDispatch()
    const thunkConnector = useThunkConnector()

    /* methods */
    const setAlbum = (albumId: number) => {
        dispatch(thunk.getPhotosByAlbum({
            albumId
        }))
    }


    /* effects */
    useEffect(()=>{
        dispatch(thunk.getAlbums(thunkConnector))
    },[])

    return (
        <section className='AlbumList'>
            {albums.map((album, index) => (
                <Album album={album} onClick={setAlbum}/>
            ))}
        </section>
    )
}