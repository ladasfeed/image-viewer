import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import './style.css'
import {HeaderImages} from "./images";
import {routes} from "../../routes";
const {
    photosIcon,
    albumsIcon,
    usersIcon
} = HeaderImages

export const Header:FC = () => {

    return (
        <header className='Header'>
            <Link to={routes.users}>
                <img src={usersIcon}/>
            </Link>
            <Link to={routes.albums}>
                <img src={albumsIcon}/>
            </Link>
            <Link to={routes.photos}>
                <img src={photosIcon}/>
            </Link>
        </header>
    )
}