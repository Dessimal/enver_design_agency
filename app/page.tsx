"use client";

import React, { useState } from "react";
import {
  Add,
  ArrowHead,
  footerLinks,
  HeroImage,
  Logo,
  portfolios,
  services,
  TwoCircles,
  ZigZag,
} from "./constants";
import Card from "./components/Card";
import Image from "next/image";
import {
  ArrowUpRight,
  CircleChevronLeft,
  CircleChevronRight,
} from "lucide-react";
import { Spotlight } from "./components/ui/Spotlight";
import Button from "./components/Button";
import Subheading from "./components/Subheading";

const Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getNextIndex = (array, index, direction) => {
    if (direction === "next") {
      return (index + 1) % array.length;
    }
    if (direction === "previous") {
      return (index - 1 + array.length) % array.length;
    } else {
      throw new Error("Invalid direction. Use 'next' or 'previous'.");
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => getNextIndex(portfolios, prev, "next"));
  };
  const handlePrev = () => {
    setCurrentIndex((prev) => getNextIndex(portfolios, prev, "previous"));
  };

  return (
    <main className="mx-auto w-full px-8 py-12 space-y-32">
      <section className="flex flex-col sm:flex-row space-y-10">
        <Spotlight className="absolute -top-40 -left-40 size-6" fill="purple" />
        <Spotlight
          className="absolute -top-80 left-2 h-[80vh] w-[50vw]"
          fill="white"
        />
        <Spotlight className="absolute -top-1 left-2" fill="blue" />

        <div className="space-y-10">
          <div>
            <h1 className="font-extrabold text-6xl leading-20">
              Build Your <br /> Awesome <br />
              Platform
            </h1>
          </div>
          <div className="space-y-12">
            <p className="text-2xl">
              Enver studio is a digital studio that offers{" "}
              <br className="sm:hidden" />
              several services such as UI/UX Design to{" "}
              <br className="sm:hidden" />
              developers. You can trust us to deliver the{" "}
              <br className="sm:hidden" /> very best
            </p>
            <div>
              <Button
                buttonText="Our Services"
                icon={<ArrowUpRight size={28} />}
              />
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative ">
            <Image
              className="w-full object-cover"
              src={HeroImage}
              width={800}
              height={800}
              alt="hero image"
            />
          </div>
          <Image
            src={ZigZag}
            width={80}
            height={80}
            alt="zigzag image"
            className="absolute top-14 left-1"
          />
          <Image
            src={TwoCircles}
            width={80}
            height={80}
            alt="two circles image"
            className="absolute top-6 right-10"
          />
          <Image
            src={Add}
            width={50}
            height={50}
            alt="arrowhead image"
            className="absolute bottom-10 right-1"
          />
          <Image
            src={ArrowHead}
            width={80}
            height={80}
            alt="cross image"
            className="absolute -bottom-8 left-1"
          />
        </div>
      </section>

      <section>
        <div className="space-y-6">
          <Subheading text="why enver is the best choice?" />
          <p>
            Watch this one minute video so you unders tand why you should use
            our services!
          </p>
        </div>
      </section>

      <section className="space-y-24">
        <Subheading text="The Services We Provide For You" />
        <div className="grid sm:grid-cols-3 place-items-center gap-20">
          {services.map(({ title, text, src }) => (
            <Card key={title} title={title} text={text} src={src} />
          ))}
        </div>
      </section>

      <section className="space-y-16">
        <Subheading text="Our Awesome Portfolio" />

        <div className="w-full space-y-14">
          <div className="bg-gray-900 w-full p-10 ">
            <Image
              src={portfolios[currentIndex]}
              height={300}
              width={250}
              alt={`portfolio-image-${currentIndex}`}
              className="rounded-md object-contain w-full"
            />
          </div>
          <div className="space-x-10 w-full mx-auto flex items-center justify-center">
            <button
              onClick={handleNext}
              className="cursor-pointer rounded-md block ">
              <CircleChevronLeft size={50} fill="purple" />
            </button>
            <button
              onClick={handlePrev}
              className="cursor-pointer rounded-md block ">
              <CircleChevronRight size={50} fill="purple" />
            </button>
          </div>
        </div>
      </section>

      <section className="space-y-12">
        <h2 className="font-bold text-5xl md:text-4xl">
          Contact us for the service you want to use
        </h2>

        <Button buttonText="Contact us" />
      </section>

      <footer className="flex flex-col items-center space-y-12">
        <div className="">
          <Image src={Logo} height={30} width={100} alt="logo image" />
        </div>
        <div className="font-sm text-gray-300 text-center space-y-12">
          {footerLinks.map((footerLink) => (
            <p className="" key={footerLink}>
              {footerLink}
            </p>
          ))}
          <p>&copy; 2025. All Rights Reserved</p>
        </div>
      </footer>
    </main>
  );
};

export default Page;
