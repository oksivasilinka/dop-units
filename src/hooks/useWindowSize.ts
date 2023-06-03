import {useEffect, useState} from "react";

export function useWindowSize() {
    const [windowSize, setWindowSize] = useState(0)

    useEffect(() => {
        function handlerResize() {
            setWindowSize(window.innerWidth);
        }

        window.addEventListener('resize', handlerResize);
        handlerResize();
        return () => window.removeEventListener('resize', handlerResize);
    }, []);
    return windowSize;
}