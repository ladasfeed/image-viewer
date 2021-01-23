import React, {FC, useEffect} from 'react'
import './style.css'
import {useThunkConnector} from "../../../../../../../hooks/useThunkConnector";
import {useDispatch, useSelector} from "react-redux";
import {userPageSelectors} from "../../../../../../../store/userPageReducer";
import {userPageThunk} from "../../../../../../../store/userPageReducer/thunk";


export const UserAlbums: FC = () => {
    /* state */
    const albumsThunkConnector = useThunkConnector()
    const currentUser = useSelector(userPageSelectors.getCurrentUser)
    const userAlbums = useSelector(userPageSelectors.getUsersAlbums)
    const userThunk = userPageThunk()
    const dispatch = useDispatch()

    /* methods */
    const getUserPhotos = (albumId: number) => {
        dispatch(userThunk.getPhotosByAlbum({
            albumId
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
        <div className='UserAlbums'>
            {albumsThunkConnector.loading.get
                ? <div>Loading...</div>
                : userAlbums.map(item => (
                    <div onClick={()=>getUserPhotos(Number(item.id))}>
                        {item.title}
                    </div>
                ))
            }
        </div>
    )
}