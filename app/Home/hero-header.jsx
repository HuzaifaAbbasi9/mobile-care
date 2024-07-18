import React from "react";
import { H1, H2, H3, Img, P, SvgIcons } from "../components";
import { Checkbox, Divider, Input, Select } from "antd";
import { HeroHeaderData } from "../data/data";

const HeroHeader = () => {
  return (
    <div className="md:max-w-95/100 md:mx-auto md:px-5 max-md:px-4 py-9">
      <H2 text="Váš košík" otherClass="mb-3 text-center" />
      <P
        text="V košíku máte aktuálne 2 produkty"
        otherClass="mb-14 text-center"
      />
      <div className="grid lg:grid-cols-2">
        <div className="relative space-y-7">
          {HeroHeaderData?.cart?.map((item, i) => (
            <React.Fragment key={i}>
              <div className="flex justify-between gap-4">
                <div className="flex items-stretch">
                  <Img src={item.img} />
                  <div className="space-y-1 pl-4">
                    <H3 text={item.title} />
                    <P text={item.description} otherClass="!mb-6" />
                    <button className="min-h-36px w-160px border-2 border-dark-100 flex items-center justify-center gap-2 text-dark-100">
                      <SvgIcons type="navigationBarIcon2" />
                      <span className="text-xs font-bold">
                        Odložiť na neskôr
                      </span>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center justify-end gap-2">
                    <H3 text={item.price} textColorClass="text-danger-100" />
                    {item.oldPrice && (
                      <P
                        text={item.oldPrice}
                        textColorClass="text-light-200"
                        otherClass="line-through"
                        fontWeightClass="font-medium"
                      />
                    )}
                    <SvgIcons type="delete" className="cursor-pointer" />
                  </div>
                  {item.discount && (
                    <P
                      textSizeClass="text-12px"
                      text={item.discount}
                      textColorClass="text-danger-100"
                      fontWeightClass="font-medium"
                    />
                  )}
                  <div className="!mt-auto space-y-1">
                    <P
                      textSizeClass="text-12px"
                      text={"Zadajte množstvo tu"}
                      textColorClass="text-dark-100"
                      fontWeightClass="font-semibold"
                    />
                    <Select
                      defaultValue="1"
                      suffixIcon={
                        <SvgIcons type="arrow-down" className="!wh-16px" />
                      }
                      options={[
                        {
                          value: "1",
                          label: "1",
                        },
                        {
                          value: "2",
                          label: "2",
                        },
                        {
                          value: "3",
                          label: "3",
                        },
                        {
                          value: "4",
                          label: "4",
                        },
                      ]}
                      className="!rounded-none !h-42px !mt-2 !w-192px !font-bold cusotm-selectbox"
                    />
                  </div>
                </div>
              </div>
              <Divider />
            </React.Fragment>
          ))}
        </div>
        <div className="pl-10">
          <div className="border-2 border-light-100 h-full">
            <div className="flex items-center gap-3 py-5 px-5 bg-light-200/10">
              <SvgIcons type="van" />
              <P
                textSizeClass="text-12px"
                text={"Doručíme"}
                textColorClass="text-dark-100"
                fontWeightClass="font-semibold"
              />
              <P
                textSizeClass="text-12px"
                text={"Pon, 19. 8 - Ut, 20. 8."}
                textColorClass="text-dark-100/60"
                fontWeightClass="font-medium"
                otherClass="!ml-auto"
              />
            </div>
            <div className="py-5 px-5 space-y-17px">
              <div className="flex items-center justify-between gap-4">
                <P
                  textSizeClass="text-14px"
                  text={"Akceptujeme platby"}
                  textColorClass="text-dark-100"
                  fontWeightClass="font-semibold"
                />
                <Img src="./images/payment-options.svg" />
              </div>
              <div className="flex items-center justify-between gap-4">
                <H3
                  text={"Voucher"}
                  textColorClass="text-dark-100"
                  fontWeightClass="font-semibold"
                />
                <Input
                  className="!rounded-none !h-40px !w-270px !font-semibold"
                  placeholder="Zľavový kód"
                />
              </div>
              <br />
              <div className="flex items-center justify-between gap-4">
                <H3
                  text={"Spolu položky"}
                  textColorClass="text-dark-100"
                  fontWeightClass="font-medium"
                />
                <H3
                  text={"3778 €"}
                  textColorClass="text-dark-100"
                  fontWeightClass="font-medium"
                />
              </div>
              <div className="flex items-center justify-between gap-4">
                <H3
                  text={"Doprava:"}
                  textColorClass="text-dark-100"
                  fontWeightClass="font-medium"
                />
                <H3
                  text={"0 €"}
                  textColorClass="text-dark-100"
                  fontWeightClass="font-medium"
                />
              </div>
              <Divider />
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center justify-between gap-1">
                  <H3
                    text={"Spolu:"}
                    textColorClass="text-dark-100"
                    fontWeightClass="font-medium"
                  />
                  <H3
                    text={"(vrátane DPH)"}
                    textColorClass="text-dark-100/50"
                    fontWeightClass="font-medium"
                  />
                </div>
                <H1 text={"3778 €"} />
              </div>
              <div className="flex items-center justify-between gap-4">
                <Checkbox className="custom-checkbox">
                  <H3
                    text={"zobraziť cenu bez DPH"}
                    textColorClass="text-dark-100/50"
                    fontWeightClass="font-medium"
                    otherClass="leading-none"
                  />
                </Checkbox>
              </div>
              <div className="flex items-stretch gap-4 !pt-5">
                <button className="h-45px border-3 border-dark-100 font-bold text-base px-4 text-center flex-1">Pokračovať v nákupe</button>
                <button className="h-45px border-3 border-dark-100 bg-dark-100 text-accent-100 font-bold text-base px-4 text-center flex-1">Pokračovať v nákupe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HeroHeader };
