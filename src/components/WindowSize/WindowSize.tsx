import React from "react";
import useWindowSize from "./useWindowSize";


const WindowSize = () => {
    const windowSize = useWindowSize();

    return (
        <div className="p-4 bg-gray-200 text-center mx-auto w-full my-2">
            <p className="text-black my-2">{windowSize.innerHeight}px</p>
            <p className="text-black my-2">{windowSize.innerWidth}px</p>
        </div>
    );
}


export default WindowSize;