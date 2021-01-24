import React, {FC, useEffect} from 'react'
import {UserThumb} from "./components/UserThumb";
import {useDispatch, useSelector} from "react-redux";
import {userPageSelectors} from "../../../../../store/userPageReducer";
import {userPageThunk} from "../../../../../store/userPageReducer/thunk";

export const UserList:FC = () => {
    /* state */
    const users = useSelector(userPageSelectors.getUsersList)
    const dispatch = useDispatch()
    const userThunk = userPageThunk()

    /* initial effect */
    useEffect(()=>{
        dispatch(userThunk.getUsers())
    }, [])

    return (
        <div className='Users__list'>
            {users.map((user, index) =>
                <UserThumb key={index} user={user}/>
            )}
        </div>
    )
}