import {useState} from "react";

export const usePaginator = () => {
    const [currentPage, setCurrentPage] = useState(0)
    const [pagination, setPagination] = useState([0, 1, 2])

    const refresh = () => {
        setCurrentPage(0)
        setPagination([0, 1, 2])
    }

    return {
        currentPage,
        setCurrentPage,
        pagination,
        setPagination,
        refresh
    }
}