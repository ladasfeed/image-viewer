import axios from 'axios'
import {IGetPhotosByAlbum, IGetSomethingByUser} from "./types";

/* configuration */
const request = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const userPageApi = {
    getUsers: async () => {
        const response = await request.get('users')
        return response
    },
    getAlbumsByUser: async (props: IGetSomethingByUser) => {
        const response = await request.get(`users/${props.userId}/albums`)
        return response
    },
    getPhotosByUser: async (props: IGetSomethingByUser) => {
        const response = await request.get(`users/${props.userId}/photos`)
        return response
    },
    getPhotosByAlbum: async (props: IGetPhotosByAlbum) => {
        const response = await request.get(`albums/${props.albumId}/photos`)
        return response
    },
}