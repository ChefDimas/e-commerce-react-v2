import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";

function Navbar() {
  const style = "text-[14px] cursor-pointer ml-[25px] ";

  return (
    <div className="navbar h-[60px] shadow-md relative z-100">
      {/* Wrapper of NavBar */}
      <div className="wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center">
        {/* Left Div */}
        <div className="left flex flex-1 items-center">
          <div className="language cursor-pointer text-[16px]">EN</div>
          {/* Search Input */}
          <div className="searchingInput flex border-2 border-solid border-lightgrey rounded-md items-center ml-[10px] p-[5px] focus-within:border-[#8a4af3] transition-all">
            <input type="text" className="input outline-none" />
            {/* Material UI Icon */}
            <Search className="" style={{ fontSize: "18px" }} />
          </div>
        </div>
        {/* Logo */}
        <div className="center flex-1 text-center">
          <div className="logo font-bold text-lg">Summer</div>
        </div>
        {/* Right Div */}
        <div className="right flex flex-1 items-center justify-end">
          <div className={style}>Register</div>
          <div className={style}>Sign In</div>
          <div className={style}>
            <Badge badgeContent={2} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
