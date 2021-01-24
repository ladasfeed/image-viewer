import React, {FC, HTMLAttributes} from "react";
import {useHistory} from "react-router-dom";
const DELAY = 600

type PropsType = {
    to: string
} & HTMLAttributes<HTMLAnchorElement>
export const AnimatedLink:FC<PropsType> = (props) => {
    const {
        children,
        to,
        ...other
    } = props
    const history = useHistory()

    const redirectHandler = () => {
        setTimeout(()=>{
            history.push(to)
        }, DELAY)
    }
    return (
        <a {...other} onClick={redirectHandler}>{children}</a>
    )
}