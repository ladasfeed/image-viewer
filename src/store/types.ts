export type PhotoType =  {
    albumId: number | null,
    id: number | null,
    title: string | null,
    url: string | null,
    thumbnailUrl: string | null
}

export type PhotosObjectType =  {
    photos: Array<PhotoType>
    isLoading: boolean
}

export type AlbumType = {
    userId: number | null,
    id: number | null,
    title: string | null
}

export type UserType = {
    id: null | number,
    name: null | string,
    username: null | string,
    email: null | string,
    address: {
        street: null | string,
        suite: null | string,
        city: null | string,
        zipcode: null | string,
        geo: {
            lat: null | string,
            lng: null | string
        }
    },
    phone: null | string,
    website: null | string,
    company: {
        name: null | string,
        catchPhrase: null | string,
        bs: null | string
    }
}

