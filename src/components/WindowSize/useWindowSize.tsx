import { useState, useEffect } from "react";

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
        outerWidth: window.outerWidth,
        outerHeight: window.outerHeight,
    });

    useEffect(() => {
        const handle = () => setWindowSize({
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
            outerWidth: window.outerWidth,
            outerHeight: window.outerHeight,
        });

        window.addEventListener("resize", handle);
        window.addEventListener("scroll", handle);

        return () => {
            window.removeEventListener("resize", handle);
            window.removeEventListener("scroll", handle);
        }
    });

    return windowSize;
}


export default useWindowSize;