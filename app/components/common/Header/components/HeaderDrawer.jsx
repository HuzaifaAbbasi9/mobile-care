"use client";
import React, { useState } from "react";
import { Divider, Drawer, Menu } from "antd";
import { Img } from "@/app/components/image";
import { SvgIcons } from "@/app/components";
import { HeaderData } from "@/app/data/data";

const HeaderDrawer = ({ drawerVisible, setDrawerVisible }) => {
  const [openMenus, setOpenMenus] = useState(["menu1"]);
  const [activeMenuLinks, setActiveMenuLinks] = useState({
    tab1: null,
    tab2: null,
    tab3: null,
  });
  const onClose = () => {
    setDrawerVisible(false);
    setOpenMenus(["menu1"]);
    setActiveMenuLinks({
      tab1: null,
      tab2: null,
      tab3: null,
    });
  };
  const handleMenuClick = (tab, index) => {
    setActiveMenuLinks((prevActiveMenuLinks) => ({
      ...prevActiveMenuLinks,
      [tab]: index,
    }));
    if(openMenus.length <= 2) {
        const nextMenuLevel = `menu${parseInt(tab.replace("tab", "")) + 1}`;
        setOpenMenus((prevOpenMenus) => {
          if (!prevOpenMenus.includes(nextMenuLevel)) {
            return [...prevOpenMenus, nextMenuLevel];
          }
          return prevOpenMenus;
        });
    }
  };
  const renderMenu = (menuLevel) => {
    if (openMenus.includes(menuLevel)) {
      switch (menuLevel) {
        case "menu1":
          return (
            <div className="flex-1 pl-6 pr-4 bg-primary-100 text-accent-100 h-full flex flex-col overflow-y-auto">
              <div className="flex items-center justify-between gap-5 w-full sticky top-0 pt-6 pb-4 bg-primary-100 z-2">
                <Img src="./images/logo-white.svg" />
                <button
                  onClick={onClose}
                  className="wh-36px border-3 border-solid border-dark-100 grid place-items-center text-dark-100 transition-colors duration-300 hover:text-accent-100 hover:border-accent-100"
                >
                  <SvgIcons type="close" />
                </button>
              </div>
              <div className="mt-4 space-y-5 flex-1 pb-6">
                {HeaderData?.drawer?.tab1?.links?.map((menu, i) => (
                  <React.Fragment key={i}>
                    <ul>
                      {menu?.map((link, index) => (
                        <li
                          key={index}
                          onClick={() =>
                            handleMenuClick("tab1", `${i}${index}`)
                          }
                        >
                          <button className="flex items-center gap-2 w-full min-h-36px text-secondary-100">
                            {link.icon && <SvgIcons type={link.icon} />}
                            <span
                              className={`${
                                activeMenuLinks.tab1 === `${i}${index}`
                                  ? "font-bold text-accent-100"
                                  : "font-semibold"
                              } text-base`}
                            >
                              {link.title}
                            </span>
                            {link.tag && (
                              <span
                                className={`py-5px px-7px font-semibold text-dark-100 !leading-none ${
                                  link.tagType === "warning"
                                    ? "bg-warning-100"
                                    : link.tagType === "danger"
                                    ? "bg-danger-100"
                                    : ""
                                }`}
                              >
                                {link.tag}
                              </span>
                            )}
                            {!link.hideArrow && (
                              <span
                                className={`wh-36px grid place-items-center ml-auto ${
                                  activeMenuLinks.tab1 === `${i}${index}`
                                    ? "bg-accent-100 text-primary-100"
                                    : ""
                                }`}
                              >
                                <SvgIcons
                                  type="arrow-right"
                                  className="!wh-17px"
                                />
                              </span>
                            )}
                          </button>
                        </li>
                      ))}
                    </ul>
                    <Divider className="!border-t-primary-200 !border-t-2" />
                  </React.Fragment>
                ))}
                <div>
                  <h3 className="text-sm font-semibold mb-4">Sledujte nás</h3>
                  <ul className="flex items-center gap-1">
                    {HeaderData?.drawer?.tab1?.icons?.map((icon, i) => (
                      <li key={i} className="cursor-pointer">
                        <SvgIcons type={icon} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        case "menu2":
          return (
            <div className="flex-1 pl-6 pr-4 bg-accent-100 text-dark-100 h-full flex flex-col overflow-y-auto">
              <div className="flex items-center justify-between gap-5 w-full sticky top-0 pt-6 pb-4 bg-accent-100 z-2">
                <h3 className="text-2xl font-bold text-primary-100">
                  {HeaderData?.drawer?.tab2?.heading}
                </h3>
              </div>
              <div className="mt-5 space-y-5 flex-1 pb-6">
                <ul className="space-y-3">
                  {HeaderData?.drawer?.tab2?.links?.map((link, index) => (
                    <li
                      key={index}
                      onClick={() => handleMenuClick("tab2", index)}
                    >
                      <button className="flex items-center gap-2 w-full min-h-36px text-dark-100">
                        {link.img && <Img src={link.img} />}
                        <span className={`${activeMenuLinks.tab2 === index ? 'font-bold' : 'font-semibold'} text-base`}>
                          {link.title}
                        </span>
                        <span
                          className={`wh-36px grid place-items-center ml-auto ${
                            activeMenuLinks.tab2 === index
                              ? "bg-dark-100 text-accent-100"
                              : ""
                          }`}
                        >
                          <SvgIcons type="arrow-right" className="!wh-17px" />
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
                <Img
                  src={HeaderData?.drawer?.tab2?.bannerImag}
                  className="!mt-10 w-full"
                />
              </div>
            </div>
          );
        case "menu3":
          return (
            <div className="flex-1 pl-6 pr-4 bg-accent-100 text-dark-100 h-full flex flex-col overflow-y-auto border-l-2 border-l-light-100">
              <div className="flex items-center justify-between gap-5 w-full sticky top-0 pt-6 pb-4 bg-accent-100 z-2">
                <h3 className="text-2xl font-bold text-primary-100">
                  {HeaderData?.drawer?.tab3?.heading}
                </h3>
              </div>
              <div className="mt-5 space-y-5 flex-1 pb-6">
                <ul className="space-y-3">
                  {HeaderData?.drawer?.tab3?.links?.map((link, index) => (
                    <li key={index} onClick={() => handleMenuClick("tab3", index)}>
                      <button className="flex items-center gap-2 w-full min-h-36px text-dark-100">
                        <span
                          className={`${
                            activeMenuLinks.tab3 === index ? "font-bold" : "font-regular"
                          } text-base`}
                        >
                          {link.title}
                        </span>
                        {link.showArrow && (
                          <span
                            className={`wh-36px grid place-items-center ml-auto`}
                          >
                            <SvgIcons type="arrow-right" className="!wh-17px" />
                          </span>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        default:
          return null;
      }
    }
    return null;
  };
  const calculateDrawerWidth = () => {
    const baseWidth = 350;
    const menuIncrement = 350;
    const activeMenus = openMenus.length;
    const width = baseWidth + menuIncrement * (activeMenus - 1);

    return `${width}px`;
  };

  return (
    <Drawer
      open={drawerVisible}
      width={calculateDrawerWidth()}
      onClose={onClose}
      placement="left"
      className="custom-drawer"
      styles={{ body: { padding: 0 }, header: { display: "none" } }}
    >
      <div className="flex items-start h-full">
        {renderMenu("menu1")}
        {renderMenu("menu2")}
        {renderMenu("menu3")}
      </div>
    </Drawer>
  );
};

export { HeaderDrawer };
