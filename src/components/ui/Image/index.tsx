import React, {FC, HTMLAttributes, useEffect, useState} from "react";
import cn from "classnames";
import './style.css'

type PropsType = {
    src: string,
    title?: string
} & HTMLAttributes<HTMLImageElement>
export const Image:FC<PropsType> = (props) => {
    const {
        src,
        title
    } = props
    const [loading, setLoading] = useState(true)

    /* methods */
    const onLoad = () => {
        setLoading(false)
    }
    useEffect(()=>{
        setLoading(true)
    }, [src])

    return (
        <div className={cn('Image', {
            'Image--loading': loading
        })}>
            <div className='Image__loading'/>
            <img
                onLoad={onLoad}
                src={src}
                onClick={props.onClick}
            />
            {title && <div className='Image__title'>{title}</div>}
        </div>
    )
}