import React from "react";

const H2 = ({
  text = "",
  textColorClass = "text-dark-100",
  fontWeightClass = "font-bold",
  otherClass = "",
}) => {
  return (
    <h2 className={`lg:text-24px max-lg:text-20px ${fontWeightClass} ${textColorClass} ${otherClass}`}>
      {text}
    </h2>
  );
};

export { H2 };
