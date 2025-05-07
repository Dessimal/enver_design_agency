import React from "react";

interface SubheadingProps {
  text: string;
}

const Subheading: React.FC<SubheadingProps> = ({ text }) => {
  return (
    <h2 className="leading-[4.5rem] font-extrabold text-5xl md:text-6xl capitalize">
      {text}
    </h2>
  );
};

export default Subheading;
