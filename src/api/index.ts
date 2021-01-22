import axios from 'axios'

/* configuration */
const request = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const userPageApi = {
    getUsers: async () => {
        const response = await request.get('users')
        return response
    }
}