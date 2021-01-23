import React, {FC, useEffect} from 'react'
import './style.css'
import {useDispatch, useSelector} from "react-redux";
import {userPageActions, userPageSelectors} from "../../../../../store/userPageReducer";
import {ImageViewer} from "../../../../ui/ImageViewer";
import {UserAlbums} from "./components/UserAlbums";
import {UserInfo} from "./components/UserInfo";


export const UserPage: FC = () => {
    /* state */
    const currentUser = useSelector(userPageSelectors.getCurrentUser)
    const photosObject = useSelector(userPageSelectors.getUserPhotos)
    const dispatch = useDispatch()

    /* clean */
    useEffect(() => {
        dispatch(userPageActions.setUserPhotos({
            photos: [],
            isLoading: false
        }))
    }, [currentUser])

    /* view */
    if (currentUser.id == null) {
        return (
            <div>Choose user</div>
        )
    }
    return (
        <div className='UserPage'>
            <UserInfo user={currentUser}/>
            <UserAlbums/>
            <ImageViewer photosObject={photosObject}/>
        </div>
    )
}