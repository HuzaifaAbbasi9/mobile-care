import { HeaderData } from "@/app/components/data/data";
import React from "react";
import { NavLink } from "./NavLink";
import { Img } from "../../image";
import { SvgIcons } from "@/app/components";

const MainNavigation = () => {
  return (
    <nav className="pb-4 pt-7 bg-dark-100">
      <div className="container">
        <div className="flex items-center justify-between gap-5">
          <div className="flex items-center justify-between gap-12">
            {HeaderData?.navigationBar?.navigationTopbar?.links?.map((link, index) => (
              <NavLink key={index} text={link.title} icon={link.icon} />
            ))}
          </div>
          <div className="flex items-center justify-center gap-7">
            {HeaderData?.navigationBar?.navigationTopbar?.logos?.map((logo, index) => (
              <Img src={logo} key={index} />
            ))}
          </div>
          <div className="flex items-center justify-end gap-5">
            {HeaderData?.navigationBar?.navigationTopbar?.icons?.map((icon, index) => (
              <SvgIcons type={icon} key={index} className="text-accent-100 cursor-pointer transition-opacity duration-300 hover:opacity-80" />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export { MainNavigation };
