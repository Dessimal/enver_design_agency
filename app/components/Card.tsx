import Image from "next/image";
import React from "react";

interface CardProps {
  icon?: React.ReactElement; // Corrected here
  title: string; // Corrected here
  text: string; // Corrected here
  color: string;
  src: React.ReactElement;
}

const Card: React.FC<CardProps> = ({ icon, title, text, color, src }) => {
  return (
    <div>
      <div className="flex flex-col gap-8 w-full items-center text-center">
        <div className={`size-16 rounded-2xl ring-transparent z-50 ${color}`}>
          {icon}
          <Image src={src} height={120} width={120} alt="icon image" />
        </div>
        <h3 className="font-bold text-3xl text-center">{title}</h3>
        <p className="text-center max-w-2xs">{text}</p>
      </div>
    </div>
  );
};

export default Card;
