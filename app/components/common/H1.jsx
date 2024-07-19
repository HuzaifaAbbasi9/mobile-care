import React from "react";

const H1 = ({
  text = "",
  textSizeClass= "lg:text-40px max-lg:text-32px",
  textColorClass = "text-dark-100",
  fontWeightClass = "font-bold",
  otherClass = ""
}) => {
  return (
    <h1 className={`${textSizeClass} ${fontWeightClass} ${textColorClass} ${otherClass}`}>
      {text}
    </h1>
  );
};

export { H1 };
