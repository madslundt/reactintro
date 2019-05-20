import React from "react";

import WindowSize from "Components/WindowSize";


const Window = () => (
    <div className="h-full py-10">
        <div className="fixed">
            <WindowSize />
        </div>
    </div>
);


export default Window;