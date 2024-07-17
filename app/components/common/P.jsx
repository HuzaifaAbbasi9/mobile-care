import React from "react";

const P = ({
  text = "",
  textColorClass = "text-dark-100/50",
  textSizeClass = "lg:text-16px max-lg:text-14px ",
  fontWeightClass = "font-medium",
  otherClass = "",
}) => {
  return (
    <p className={`${textSizeClass} ${fontWeightClass} ${textColorClass} ${otherClass}`}>
      {text}
    </p>
  );
};

export { P };
