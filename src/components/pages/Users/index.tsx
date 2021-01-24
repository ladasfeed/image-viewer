import React, {FC, useEffect} from 'react'
import './style.css'
import {userPageActions, userPageSelectors} from "../../../store/userPageReducer";
import {useDispatch, useSelector} from "react-redux";
import {userPageThunk} from "../../../store/userPageReducer/thunk";
import {UserThumb} from "../../ui/UserThumb";
import {UserPage} from "./components/UserPage";
import {UserList} from "./components/UsersList";

export const Users:FC = () => {


    return (
        <section className='Users two-cols-container'>
            <UserList/>
            <UserPage/>
        </section>
    )
}