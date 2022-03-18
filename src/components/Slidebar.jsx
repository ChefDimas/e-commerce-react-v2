import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from "react";

function Slidebar() {
  const arrowstyle =
    "rightarrow rounded-full bg-gray flex justify-center items-center shadow-sm hover:cursor-pointer";

  return (
    <div className="slidebar-container bg-white flex items-center justify-between h-[540px]">
      {/* Left arrow */}
      <div className={arrowstyle}>
        <ArrowLeftOutlined style={{ fontSize: "50px" }} />
      </div>
      {/* Slides */}
      <div className="wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-xl border-[#c0c0c0] border-10px overflow-hidden relative bg-[#ffd028]">
        <div className="slide flex items-center justify-center h-[100%]">
          <div className="for-image flex justify-center items-center h-[100%]">
            <img
              src="https://images.unsplash.com/photo-1538329972958-465d6d2144ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="fashion"
              className="h-[100%] object-cover"
            />
          </div>
          <div className="photo-description flex flex-col flex-1 place-items-start justify-center ml-11">
            <h2 className="text-[55px]">Amazing Deal</h2>
            <p className="text-[30px]">About 40% off</p>
            <button className="btn">Shop Now</button>
          </div>
        </div>
      </div>
      {/* Right arrow */}
      <div className={arrowstyle}>
        <ArrowRightOutlined style={{ fontSize: "50px" }} />
      </div>
    </div>
  );
}

export default Slidebar;
