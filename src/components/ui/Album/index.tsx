import {AlbumType} from "../../../store/types";
import React, {FC} from "react";
import albumIcon from "../../pages/Users/components/UserPage/components/UserAlbums/images/album.png";
import './style.css'

type UserAlbumType = {
    album: AlbumType,
    onClick: (id: number) => void
}
export const Album:FC<UserAlbumType> = (props) => {
    /* state */
    const {
        album,
        onClick
    } = props

    /* methods */
    const clickHandler = () => {
        onClick(Number(album.id))
    }

    return (
        <div onClick={clickHandler} className='Album'>
            <img src={albumIcon}/>
            <div>{album.title}</div>
        </div>
    )
}