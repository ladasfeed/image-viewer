import React, {FC, useEffect} from 'react'
import './style.css'
import {useDispatch, useSelector} from "react-redux";
import {userPageActions, userPageSelectors} from "../../../../../store/userPageReducer";
import {ImageViewer} from "../../../../ui/ImageViewer";
import {UserAlbums} from "./components/UserAlbums";
import {UserInfo} from "./components/UserInfo";
import {userPageThunk} from "../../../../../store/userPageReducer/thunk";


export const UserPage: FC = () => {
    /* state */
    const currentUser = useSelector(userPageSelectors.getCurrentUser)
    const photosObject = useSelector(userPageSelectors.getUserPhotos)
    const thunk = userPageThunk()
    const dispatch = useDispatch()

    /* clean */
    const cleanPhotos = () => {
        dispatch(userPageActions.setUserPhotos({
            photos: [],
            isLoading: false
        }))
    }
    useEffect(() => {
        cleanPhotos()
        if (currentUser.id) {
            dispatch(thunk.getPhotosByUser({
                userId: Number(currentUser.id)
            }))
        }
    }, [currentUser])
    useEffect(()=>{
        return cleanPhotos
    }, [])

    /* view */
    if (currentUser.id == null) {
        return <div className='UserPage--empty'>Choose user</div>
    }
    return (
        <div className='UserPage'>
            <UserInfo user={currentUser}/>
            <UserAlbums/>
            <ImageViewer photosObject={photosObject}/>
        </div>
    )
}