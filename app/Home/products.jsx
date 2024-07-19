"use client";
import React from "react";
import { Carousel } from "antd";
import { H1, Img, P, SvgIcons } from "../components";
import { HeroHeaderData } from "../data/data";

const Products = () => {
  const carouselRef = React.createRef();

  const handlePrevClick = () => {
    carouselRef.current.prev();
  };

  const handleNextClick = () => {
    carouselRef.current.next();
  };
  const contentStyle = {
    margin: 0,
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <div className="md:max-w-95/100 md:mx-auto md:px-5 max-md:px-4 py-9">
      <div className="flex items-center gap-4 mb-3">
        <SvgIcons type="shape" />
        <H1 text="Mohlo by vás zaujímať" />
      </div>
      <div className="overflow-hidden mt-10 ">
        <Carousel ref={carouselRef} slidesPerRow={4} infinite >
          {HeroHeaderData?.slider?.map((slide, index) => (
            <div className="flex flex-col relative" key={index}>
              <div className="relative flex-1">
                {slide.tag && (
                  <span className="absolute top-3 left-0 py-5px px-7px text-xs font-semibold text-dark-100 !leading-none bg-warning-100">
                    {slide.tag}
                  </span>
                )}
                <span className="absolute top-0 right-0">
                  <SvgIcons type="navigationBarIcon2" />
                </span>
                <Img src={slide.image} />
              </div>
              <div className="relative space-y-2">
                <P
                  text="iPhone 17 PRO (2023)"
                  fontWeightClass="font-semibold"
                  textColorClass="text-dark-100"
                />
                <P
                  text="Smartfóny"
                  fontWeightClass="font-medium"
                  textSizeClass="text-14px"
                  textColorClass="text-dark-100/40"
                />
                <P
                  text="1299 €"
                  fontWeightClass="font-semibold"
                  textColorClass="text-dark-100"
                />
                <div className="flex gap-1">
                  <button className="wh-16px rounded-full bg-[#F4E8CE]"></button>
                  <button className="wh-16px rounded-full bg-[#594F63]"></button>
                  <button className="wh-16px rounded-full bg-[#F0F2F2]"></button>
                  <button className="wh-16px rounded-full bg-[#403E3D]"></button>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
        <div className="flex items-center justify-end gap-4 mt-5">
          <button
            className="wh-44px border-3 border-dark-100 grid place-items-center"
            onClick={handlePrevClick}
          >
            <SvgIcons type={"sliderIcon"} className="rotate-180" />
          </button>
          <button
            className="wh-44px border-3 border-dark-100 grid place-items-center"
            onClick={handleNextClick}
          >
           <SvgIcons type={"sliderIcon"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export { Products };
