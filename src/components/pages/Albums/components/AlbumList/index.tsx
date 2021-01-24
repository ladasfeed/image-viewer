import React, {FC, useEffect} from 'react'
import './style.css'
import {useDispatch, useSelector} from "react-redux";
import {albumsReducerActions, albumsReducerSelectors} from "../../../../../store/albumsReducer";
import {albumsThunk} from "../../../../../store/albumsReducer/thunk";
import {useThunkConnector} from "../../../../../hooks/useThunkConnector";
import {Album} from "../../../../ui/Album";
import {AlbumType} from "../../../../../store/types";

export const AlbumList:FC = () => {
    /* state */
    const albums = useSelector(albumsReducerSelectors.getAlbums)
    const thunk = albumsThunk()
    const dispatch = useDispatch()
    const thunkConnector = useThunkConnector()
    const currentAlbum = useSelector(albumsReducerSelectors.getCurrentAlbum)

    /* methods */
    const setAlbum = (album: AlbumType) => {
        dispatch(thunk.getPhotosByAlbum({
            albumId: Number(album.id)
        }))
        dispatch(albumsReducerActions.setCurrentAlbum(album))
    }


    /* effects */
    useEffect(()=>{
        dispatch(thunk.getAlbums(thunkConnector))
        if (currentAlbum.id) {
            setAlbum(currentAlbum)
        }
    },[])

    return (
        <div className='AlbumList'>
            {albums.map((album, index) => (
                <Album
                    album={album}
                    onClick={setAlbum}
                    isActive={currentAlbum.id == album.id}
                />
            ))}
        </div>
    )
}