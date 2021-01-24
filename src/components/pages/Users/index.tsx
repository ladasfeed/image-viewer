import React, {FC} from 'react'
import './style.css'
import {UserPage} from "./components/UserPage";
import {UserList} from "./components/UsersList";


export const Users: FC = () => {

    return (
        <section className={`Users two-cols-container fade-in`}>
            <UserList/>
            <UserPage/>
        </section>
    )
}