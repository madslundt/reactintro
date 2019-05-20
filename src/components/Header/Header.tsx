import React from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";

import eboksIcon from "assets/images/eboksplus.png";

const Header = () => (
  <div className="bg-white mx-auto w-full shadow-md overflow-hidden align-middle">
    <div className="flex items-center flex-row content-center justify-between px-4">
      <Link to="/profile" className="text-black text-3xl cursor-pointer">
        <FontAwesome name="user" />
      </Link>

      <Link to="/">
        <img className="block h-16 w-auto py-2" alt="e-Boks" src={eboksIcon} />
      </Link>

      <Link to="/settings" className="text-black text-3xl cursor-pointer">
        <FontAwesome name="cog" />
      </Link>
    </div>
  </div>
);

export default Header;
