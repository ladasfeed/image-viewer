import axios from 'axios'
import {IGetPhotosByAlbum, IGetSomethingByUser} from "./types";

/* configuration */
const request = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const photosApi = {
    getPhotosByAlbum: async (props: IGetPhotosByAlbum) => {
        const response = await request.get(`albums/${props.albumId}/photos`)
        return response
    },
    getAllPhotos: async () => {
        const response = await request.get(`photos`)
        return response
    },
    getPhotosByUser: async (props: IGetSomethingByUser) => {
        const response = await request.get(`users/${props.userId}/photos`)
        return response
    },
}

export const albumsApi = {
    getAlbums: async () => {
        const response = await request.get(`albums`)
        return response
    },
    getAlbumsByUser: async (props: IGetSomethingByUser) => {
        const response = await request.get(`users/${props.userId}/albums`)
        return response
    },
}

export const userPageApi = {
    getUsers: async () => {
        const response = await request.get('users')
        return response
    },
}