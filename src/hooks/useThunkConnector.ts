import {useState} from 'react'

export type thunkConnectorType = {
    loading: {
        set: (value: boolean) => void,
        get: boolean
    },
    error: {
        set: (value: string) => void,
        get: string
    }
}
export const useThunkConnector = (): thunkConnectorType => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    return {
        loading: {
            set: setLoading,
            get: loading
        },
        error: {
            set: setError,
            get: error
        }
    }
}