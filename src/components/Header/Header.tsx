import React from "react";

import eboksIcon from '../../assets/images/eboksplus.png';

const Header = () => (
    <div className="bg-white mx-auto w-full shadow-md overflow-hidden align-middle">
        <div className="flex items-center flex-col">
            <img
                className="block h-24 px-6 py-2"
                alt="e-Boks"
                src={eboksIcon}
            />
        </div>
    </div>
);


export default Header;