import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { React, useState } from "react";
import { SliderApi } from "../api/SliderApi";
import "../components/slider.css";

function Slidebar() {
  // Use State Hooks

  const [slides] = useState(SliderApi);
  const [activeSlide, setActiveSlide] = useState(0);

  // Arrow Style Const
  const arrowstyle =
    "rightarrow rounded-full bg-gray flex justify-center items-center shadow-sm hover:cursor-pointer";

  // NextSlide function

  const nextSlide = () => {
    if (activeSlide === slides.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };

  const previousSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(slides.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };

  return (
    <div className="slidebar-container bg-white flex items-center justify-between h-[540px]">
      {/* Left arrow */}
      <div className={arrowstyle}>
        <ArrowLeftOutlined
          style={{ fontSize: "50px" }}
          onClick={previousSlide}
        />
      </div>
      {/* Slides */}
      {slides.map((slide, index) => {
        if (index === activeSlide) {
          return (
            <div
              className={`wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-xl border-[#c0c0c0] border-10px overflow-hidden relative + slide.background`}
            >
              <div className="slide flex items-center justify-center h-[100%]">
                <div className="for-image flex justify-center items-center h-[100%]">
                  <img
                    key={slide.photoID}
                    src={slide.src}
                    alt="fashion"
                    className="h-[100%] object-cover"
                  />
                </div>
                <div className="photo-description flex flex-col flex-1 place-items-start justify-center ml-11">
                  <h2 className="text-[55px]">{slide.content.h2}</h2>
                  <p className="text-[30px]">{slide.content.p}</p>
                  <button className="btn">Shop Now</button>
                </div>
              </div>
            </div>
          );
        }
      })}
      {/* Right arrow */}
      <div className={arrowstyle}>
        <ArrowRightOutlined style={{ fontSize: "50px" }} onClick={nextSlide} />
      </div>
    </div>
  );
}

export default Slidebar;
