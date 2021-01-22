import React, {FC, useEffect} from 'react'
import './style.css'
import {userPageActions, userPageSelectors} from "../../../store/userPageReducer";
import {useDispatch, useSelector} from "react-redux";
import {userPageThunk} from "../../../store/userPageReducer/thunk";

export const Users:FC = () => {
    const users = useSelector(userPageSelectors.getUsersList)
    const dispatch = useDispatch()
    const userThunk = userPageThunk()

    useEffect(()=>{
        dispatch(userThunk.getUsers())
    }, [])

    return (
        <section className='Users'>
            <div className='Users__users-list'>
                {users.map((user, index) => {
                    return <>
                        {user.name}
                    </>
                })}
            </div>
            <div className='Users__user-page'>

            </div>
        </section>
    )
}