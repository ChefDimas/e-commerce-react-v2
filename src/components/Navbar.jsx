import { Search } from "@material-ui/icons";
import React from "react";

function Navbar() {
  return (
    <div className="navbar h-[60px] shadow-md relative" z-100>
      {/* Wrapper of NavBar */}
      <div className="wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center">
        {/* Left Div */}
        <div className="left flex flex-1 items-center">
          <div className="language cursor-pointer text-[16px]">EN</div>
          {/* Search Input */}
          <div className="searchingInput flex border-2 border-solid border-lightgrey rounded-md items-center ml-[10px] p-[5px]">
            <input type="text" className="input outline-none" />
            {/* Material UI Icon */}
            <Search />
          </div>
        </div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  );
}

export default Navbar;
