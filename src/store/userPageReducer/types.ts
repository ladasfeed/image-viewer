import {AlbumType, PhotosObjectType, UserType} from "../types";

export type initialStateType = {
    chosenUser: UserType,
    photosObject: PhotosObjectType,
    albums: Array<AlbumType>,
    usersList: Array<UserType>
}