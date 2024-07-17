"use client"
import { HeaderData } from "@/app/data/data";
import React, { useState } from "react";
import { NavLink } from "./NavLink";
import { Img, SvgIcons } from "@/app/components";
import { Input } from "antd";
import { HeaderDrawer } from "./HeaderDrawer";

const MainNavigation = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  return (
    <>
    <nav className="py-5 bg-dark-100">
      <div className="md:max-w-95/100 md:mx-auto md:px-5 max-md:px-4">
        <div className="flex xl:gap-5 max-xl:gap-4 justify-between">
          <div className="flex items-center justify-between xl:gap-5 max-xl:gap-4 xl:max-w-62/100 max-xl:max-w-70/100 w-full">
            <div className="flex items-center justify-between xl:gap-11 max-xl:gap-6 pl-3">
              {HeaderData?.navigationBar?.navigationTopbar?.links?.map(
                (link, index) => (
                  <NavLink key={index} text={link.title} icon={link.icon} />
                )
              )}
            </div>
            <div className="flex items-center justify-center gap-5">
              {HeaderData?.navigationBar?.navigationTopbar?.logos?.map(
                (logo, index) => (
                  <Img src={logo} key={index} />
                )
              )}
            </div>
          </div>
          <div className="flex items-start justify-end xl:gap-4 max-xl:gap-3">
            {HeaderData?.navigationBar?.navigationTopbar?.icons?.map(
              (icon, index) => (
                <SvgIcons
                  type={icon}
                  key={index}
                  className="text-accent-100 cursor-pointer transition-opacity duration-300 hover:opacity-80"
                />
              )
            )}
          </div>
        </div>
        <div className="flex items-center justify-between xl:gap-5 max-xl:gap-4 pt-24px">
          <div className="flex items-center justify-between gap-12">
            <button onClick={()=>setDrawerVisible(true)} className="!h-45px !px-19px !py-8px !bg-accent-100 !flex !items-center !gap-3 !text-dark-100 !rounded-none">
              <span className="xl:text-base max-xl:text-sm font-bold tracking-tight">
                Všetky kategórie
              </span>
              <SvgIcons type="bars" />
            </button>
            <ul className="flex items-center justify-between xl:gap-11 max-xl:gap-6">
              {HeaderData?.navigationBar?.mainNavigation?.links?.map((link) => (
                <li key={link.title}>
                  <NavLink text={link.title} fontClass="font-medium" />
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <Input
              className="!h-45px !min-w-289px !rounded-none !font-medium !text-base !px-4 !text-dark-100 !text-opacity-40"
              placeholder={HeaderData?.navigationBar?.mainNavigation?.searchBar?.placeholder}
              prefix={<SvgIcons type={HeaderData?.navigationBar?.mainNavigation?.searchBar?.icon} className="!mr-1 !text-dark-100 !text-opacity-100" />}
            />
          </div>
        </div>
      </div>
    </nav>
    <HeaderDrawer drawerVisible={drawerVisible} setDrawerVisible={setDrawerVisible} />
    </>
  );
};

export { MainNavigation };
