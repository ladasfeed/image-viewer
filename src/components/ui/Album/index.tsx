import {AlbumType} from "../../../store/types";
import React, {FC} from "react";
import albumIcon from "../../pages/Users/components/UserPage/components/UserAlbums/images/album.png";
import './style.css'
import cn from "classnames";

type UserAlbumType = {
    album: AlbumType,
    onClick: (album: AlbumType) => void,
    isActive?: boolean
}
export const Album:FC<UserAlbumType> = (props) => {
    /* state */
    const {
        album,
        onClick,
        isActive = false
    } = props

    /* methods */
    const clickHandler = () => {
        onClick(album)
    }

    return (
        <div
            onClick={clickHandler}
            className={cn('Album', {
                'Album--active': isActive
            })}
        >
            <img src={albumIcon} alt='Album icon'/>
            <div>{album.title}</div>
        </div>
    )
}