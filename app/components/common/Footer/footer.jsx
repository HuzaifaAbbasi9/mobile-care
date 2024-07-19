import React from "react";
import { Img } from "../../image";
import { H1, P } from "..";
import { Input } from "antd";
import { SvgIcons } from "../..";
import { FooterData } from "@/app/data/data";

const SiteFooter = () => {
  return (
    <footer className="bg-dark-100 py-14">
      <div className="md:max-w-95/100 md:mx-auto md:px-5 max-md:px-4 space-y-14">
        <div className="grid grid-cols-2">
          <div className="relative pr-8">
            <div className="max-w-400px space-y-4">
              <Img src={"./images/footer-logo.svg"} className="pb-4" />
              <H1 text="Postaráme sa o vás" textColorClass="text-accent-100" />
              <P
                text="Odomknite nekonečné možnosti s naším prémiovým výberom Apple produktov."
                textColorClass="text-light-100/70"
              />
            </div>
          </div>
          <div>
            <div className="py-7 px-6 bg-primary-100">
              <div className="flex flex-col gap-8">
                <div className="flex gap-6 justify-between">
                  <H1
                    text="Získaj 10% zľavu"
                    textColorClass="text-accent-100"
                  />
                  <Img src={"./images/footer-shape-icon.svg"} />
                </div>
                <P
                  text="Ušetrite 10% na ďalšom nákupe produktov Apple, ak sa ešte dnes pripojíte k našej komunite odberateľov noviniek!"
                  textColorClass="text-accent-100/80"
                  fontWeightClass="font-regular"
                />
                <div className="flex gap-4">
                  <div className="relative flex-1">
                    <Input
                      className="!h-45px !min-w-289px !w-full !rounded-none !font-medium !text-base !px-4 !text-dark-100 !text-opacity-40"
                      placeholder={"Vaša e-mailová adresa"}
                      suffix={
                        <SvgIcons
                          type={"search"}
                          className="!mr-1 !text-dark-100 !text-opacity-100"
                        />
                      }
                    />
                  </div>
                  <button className="h-45px w-140px border-3 border-dark-100 bg-dark-100 text-accent-100 font-bold text-base px-4 text-center">
                    Odoslať
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="relative">
            <div className="space-y-8">
              <P
                text={FooterData?.leftBar?.data?.heading}
                textColorClass="text-accent-100"
                textSizeClass="text-sm"
              />
              <div className="space-y-4">
                {FooterData?.leftBar?.data?.links?.map((link) => (
                  <a href="#" key={link.title} className="block w-fit">
                    <P
                      text={link.title}
                      textColorClass="text-light-100/70"
                      textSizeClass="text-sm"
                      fontWeightClass="font-regular"
                    />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-20 space-y-8">
              <P
                text={"Sledujte nás"}
                textColorClass="text-accent-100"
                textSizeClass="text-sm"
              />
              <ul className="flex items-center gap-1">
                {FooterData?.leftBar?.icons?.map((icon, i) => (
                  <li key={i} className="cursor-pointer">
                    <SvgIcons type={icon} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative flex items-start justify-between gap-4">
            {FooterData.rightBar.data.map((item, i)=> (
            <div key={i} className="space-y-8">
              <P
                text={item.heading}
                textColorClass="text-accent-100"
                textSizeClass="text-sm"
              />
              <div className="space-y-4">
                {item.links.map((link) => (
                  <a href="#" key={link.title} className="block w-fit">
                    <P
                      text={link.title}
                      textColorClass="text-light-100/70"
                      textSizeClass="text-sm"
                      fontWeightClass="font-regular"
                    />
                  </a>
                ))}
              </div>
            </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between gap-5 pt-5">
          {FooterData.rightBar.tags.map((tag)=> (
            <H1 key={tag} text={tag} textSizeClass="text-32px" textColorClass="text-accent-100/20" />
          ))}
        </div>
        <div className="flex items-center justify-end gap-5">
          <Img src={"./images/payment-options.svg"} />
        </div>
        <ul className="flex items-center gap-5">
          {FooterData.rightBar.footerLinks.map((link)=> (
            <li key={link}>
              <a href="#" className="text-xs font-medium text-light-100/70">{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export { SiteFooter };
