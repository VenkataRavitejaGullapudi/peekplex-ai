import React from "react";
import ASSET_ICONS from "../utils/icons.json";
import IconComponent from "./IconComponent";

const Header = () => {
  return (
    <div className="flex px-8 py-2 bg-gradient-to-b from-black justify-between">
      <div className="w-40">
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Header;
