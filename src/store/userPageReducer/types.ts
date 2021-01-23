import {AlbumType, PhotosObjectType, PhotoType, UserType} from "../types";

export type initialStateType = {
    chosenUser: UserType,
    photosObject: PhotosObjectType,
    albums: Array<AlbumType>,
    usersList: Array<UserType>
}