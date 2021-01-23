import React, {FC, useEffect} from 'react'
import './style.css'
import {userPageActions, userPageSelectors} from "../../../store/userPageReducer";
import {useDispatch, useSelector} from "react-redux";
import {userPageThunk} from "../../../store/userPageReducer/thunk";
import {UserThumb} from "../../ui/UserThumb";
import {UserPage} from "./components/UserPage";

export const Users:FC = () => {
    /* state */
    const users = useSelector(userPageSelectors.getUsersList)
    const dispatch = useDispatch()
    const userThunk = userPageThunk()

    /* initial effect */
    useEffect(()=>{
        dispatch(userThunk.getUsers())
    }, [])

    return (
        <section className='Users two-cols-container'>
            <div className='Users__list'>
                {users.map((user, index) =>
                    <UserThumb key={index} user={user}/>
                )}
            </div>
            <UserPage/>
        </section>
    )
}