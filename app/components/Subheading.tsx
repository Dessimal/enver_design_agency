import { cn } from "@/lib/utils";
import React from "react";

interface SubheadingProps {
  text: string;
  classname?: string;
}

const Subheading: React.FC<SubheadingProps> = ({ text, classname }) => {
  return (
    <h2
      className={`
        leading-12 font-extrabold text-3xl md:text-5xl capitalize
        ${classname})`}>
      {text}
    </h2>
  );
};

export default Subheading;
