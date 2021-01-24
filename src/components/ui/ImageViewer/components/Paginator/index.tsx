import React, {FC, useEffect, useState} from 'react'
import './style.css'
import cn from "classnames";

type PropsType = {
    currentPage: number,
    setCurrentPage: (page: number) => void,
    pagination: number[],
    setPagination: (value: number[]) => void
}
export const Paginator:FC<PropsType> = (props) => {
    /* state */
    const {
        currentPage,
        setCurrentPage,
        pagination,
        setPagination
    } = props

    /* methods */
    const setPage = (page:number, index:number) => {
        if (index==2) {
            setPagination(pagination.map(p=>p+1))
        }
        if (index==0 && page!=0) {
            setPagination(pagination.map(p=>p-1))
        }
        setCurrentPage(page)
    }

    return (
        <div className='ImageViewer__pagination'>
            {pagination.map((item, index) => (
                <div
                    className={cn('ImageViewer__pagination-item', {
                        'ImageViewer__pagination-item--active': item == currentPage
                    })}
                    onClick={()=>setPage(item, index)}
                >
                    {item+1}
                </div>
            ))}
        </div>
    )
}