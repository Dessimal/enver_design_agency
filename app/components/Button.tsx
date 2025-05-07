import React from "react";

interface ButtonProps {
  buttonText: string;
  icon?: React.ReactElement;
}

const Button: React.FC<ButtonProps> = ({ buttonText, icon }) => {
  return (
    <button className="w-1/2 tracking-wide font-bold px-4 py-3 bg-purple-800 cursor-pointer">
      <div className="flex items-center justify-center gap-4">
        <span className="text-sm font-light block">{buttonText}</span>
        <span className="block">{icon}</span>
      </div>
    </button>
  );
};

export default Button;
