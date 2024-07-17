import React from "react";

const H3 = ({
  text = "",
  textColorClass = "text-dark-100",
  fontWeightClass = "font-bold",
  otherClass = "",
}) => {
  return (
    <h2 className={`lg:text-18px max-lg:text-16px ${fontWeightClass} ${textColorClass}  ${otherClass}`}>
      {text}
    </h2>
  );
};

export { H3 };
