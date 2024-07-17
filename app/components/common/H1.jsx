import React from "react";

const H1 = ({
  text = "",
  textColorClass = "text-dark-100",
  fontWeightClass = "font-bold",
  otherClass = ""
}) => {
  return (
    <h1 className={`lg:text-40px max-lg:text-32px ${fontWeightClass} ${textColorClass} ${otherClass}`}>
      {text}
    </h1>
  );
};

export { H1 };
