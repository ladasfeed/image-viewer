import React, {useEffect} from "react";


export const usePortal = (id: string) => {
    const rootElemRef = React.useRef(document.createElement('div'));

    useEffect(() => {
        const parentElem = document.querySelector(`#${id}`);
        parentElem?.appendChild(rootElemRef.current);
        return function removeElement() {
            rootElemRef.current.remove();
        };
    }, [id]);

    return rootElemRef.current;
}