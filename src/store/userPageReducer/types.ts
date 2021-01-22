import {AlbumType, PhotoType, UserType} from "../types";

export type initialStateType = {
    chosenUser: UserType,
    currentPhotos: Array<PhotoType>,
    albums: Array<AlbumType>,
    usersList: Array<UserType>
}