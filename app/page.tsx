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
  VideoThumbnail,
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
import { NewSpotlight } from "./components/ui/spotlight-new";

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
    <main className="w-full space-y-32 overflow-x-hidden">
      <section className="section-with-padding flex flex-col sm:justify-between sm:flex-row space-y-10 ">
        <Spotlight className="w-full absolute -top-40 -left-40" fill="purple" />
        <Spotlight
          className="absolute -top-80 left-2 h-[80vh] w-[50vw]"
          fill="white"
        />
        <Spotlight className="absolute -top-1 left-2" fill="blue" />

        <div className="space-y-10">
          <div>
            <h1 className="font-bold text-5xl md:text-6xl">
              Build Your <br /> Awesome <br />
              Platform
            </h1>
          </div>
          <div className="space-y-12">
            <p className="text-lg max-w-2/3 sm:max-w-[400px]">
              Enver studio is a digital studio that offers several services such
              as UI/UX Design to developers. You can trust us to deliver the{" "}
              very best
            </p>
            <div>
              <Button
                buttonText="Our Services"
                icon={<ArrowUpRight size={25} />}
              />
            </div>
          </div>
        </div>

        <div className="relative">
          <NewSpotlight />

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
            width={60}
            height={60}
            alt="zigzag image"
            className="absolute top-14 left-1"
          />
          <Image
            src={TwoCircles}
            width={50}
            height={50}
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
            width={60}
            height={60}
            alt="cross image"
            className="absolute -bottom-8 left-1"
          />
        </div>
      </section>

      <section>
        <div className="space-y-6 section-with-padding">
          <Subheading text="why enver is the best choice?" />
          <p>
            Watch this one minute video so you unders tand why you should use
            our services!
          </p>

          <div>
            <Image src={VideoThumbnail} height={500} width={500} />
          </div>
        </div>
      </section>

      <section className="space-y-24">
        <div className="section-with-padding space-y-24">
          <Subheading
            classname="text-center"
            text="The Services We Provide For You"
          />
          <div className="grid sm:grid-cols-3 place-items-center gap-20">
            {services.map(({ title, text, src }) => (
              <Card key={title} title={title} text={text} src={src} />
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-16">
        <div className="space-y-24">
          <div className="w-full section-with-padding">
            <Subheading text="Our Awesome Portfolio" />
          </div>
          <div className="w-full space-y-14">
            <div className="bg-neutral-800 w-full p-10 sm:hidden">
              <Image
                src={portfolios[currentIndex]}
                height={300}
                width={250}
                alt={`portfolio-image-${currentIndex}`}
                className="rounded-md object-contain w-full"
              />
            </div>
            <div className="hidden md:grid grid-cols-3 flex-row place-items-center w-full mx-auto gap-10">
              {portfolios.map((portfolio, index) => (
                <Image
                  key={index}
                  src={portfolio}
                  height={300}
                  width={250}
                  alt={`portfolio-image-${index}`}
                  className="rounded-md object-contain w-full"
                />
              ))}
            </div>
            <div className="md:hidden space-x-10 w-full mx-auto flex items-center justify-center">
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
        </div>
      </section>

      <section className="space-y-12">
        <div className="section-with-padding flex flex-col md:flex-row gap-4  md:gap-24">
          <Subheading text="Contact us for the service you want to use" />
          <Button buttonText="Contact us" />
        </div>
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
