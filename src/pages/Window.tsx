import React from "react";

import WindowSize from "components/WindowSize";


const Window = () => (
    <div className="h-full py-10">
        <div className="fixed">
            <WindowSize />
        </div>
    </div>
);


export default Window;