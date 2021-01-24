import React, {FC} from 'react'
import userIcon from './images/userIcon.svg'
import './style.css'
import {useDispatch} from "react-redux";
import {userPageActions} from "../../../../../../../store/userPageReducer";
import {UserType} from "../../../../../../../store/types";

type PropsType = {
    user: UserType
}
export const UserThumb: FC<PropsType> = (props) => {
    /* state */
    const dispatch = useDispatch()

    /* methods */
    const chooseUser = () => {
        dispatch(userPageActions.setCurrentUser(props.user))
    }

    return (
        <div tabIndex={0} onClick={chooseUser} className='UserThumb'>
            <img src={userIcon}/>
            <b>{props.user.name}</b>
        </div>
    )
}