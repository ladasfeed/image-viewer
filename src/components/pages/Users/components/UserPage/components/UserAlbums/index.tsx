import React, {FC, useEffect} from 'react'
import './style.css'
import {useThunkConnector} from "../../../../../../../hooks/useThunkConnector";
import {useDispatch, useSelector} from "react-redux";
import {userPageSelectors} from "../../../../../../../store/userPageReducer";
import {userPageThunk} from "../../../../../../../store/userPageReducer/thunk";
import {AlbumType} from "../../../../../../../store/types";
import albumIcon from './images/album.png'
import {Album} from "../../../../../../ui/Album";

export const UserAlbums: FC = () => {
    /* state */
    const albumsThunkConnector = useThunkConnector()
    const currentUser = useSelector(userPageSelectors.getCurrentUser)
    const userAlbums = useSelector(userPageSelectors.getUsersAlbums)
    const userThunk = userPageThunk()
    const dispatch = useDispatch()

    /* methods */
    const getUserPhotos = (album: AlbumType) => {
        dispatch(userThunk.getPhotosByAlbum({
            albumId: Number(album.id)
        }))
    }

    /* effects */
    useEffect(()=>{
        if (!currentUser) return
        dispatch(userThunk.getUserAlbums({
            userId: Number(currentUser.id)
        }, albumsThunkConnector))
    }, [currentUser])

    return (
        <>
            <div className='UserAlbums__title'>Albums</div>
            <div className='UserAlbums'>
                {albumsThunkConnector.loading.get
                    ? <div>Loading...</div>
                    : userAlbums.map(item => (
                        <Album album={item} onClick={getUserPhotos}/>
                    ))
                }
            </div>
        </>
    )
}

