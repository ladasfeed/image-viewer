import React, {FC} from "react";
import {UserType} from "../../../../../../../store/types";
import './style.css'

type PropsType = {
    user: UserType
}
export const UserInfo:FC<PropsType> = ({user}) => {

    return (
        <div className='UserPage__metadata'>
            <h3>{user.name}</h3>
            <a>{user.email}</a>
            <a>{user.website}</a>
        </div>
    )
}