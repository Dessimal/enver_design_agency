import HeroImage from "@/app/assets/better-hero-image.png";
import ArrowHead from "@/app/assets/arrow head.png";
import TwoCircles from "@/app/assets/two-circles.png";
import ZigZag from "@/app/assets/zig-zag.png";
import VideoThumbnail from "@/app/assets/video-thumbnail.png";
import Add from "@/app/assets/add.png";
import Logo from "@/app/assets/enver-mobile-logo.png";
import PortfolioOne from "@/app/assets/portfolio-1.png";
import PortfolioTwo from "@/app/assets/portfolio-2.png";
import PortfolioThree from "@/app/assets/portfolio-3.png";
import ProgrammingIcon from "@/app/assets/programming_icon.png";
import GraphicsIcon from "@/app/assets/yellowwebdev_icon.png";
import UiUxIcon from "@/app/assets/ui_ux_icon.png";
import PhotographyIcon from "@/app/assets/photography_icon.png";
import VideographyIcon from "@/app/assets/videography_icon.png";
import MotionGraphicIcon from "@/app/assets/motiongraphic_icon.png";

import {
  CodeIcon,
  ComponentIcon,
  FileImageIcon,
  ActivityIcon,
  CameraIcon,
  ClapperboardIcon,
} from "lucide-react";

export {
  HeroImage,
  VideoThumbnail,
  ArrowHead,
  TwoCircles,
  ZigZag,
  Add,
  Logo,
  VideographyIcon,
};

export const services = [
  {
    icon: CodeIcon,
    src: ProgrammingIcon,
    title: "Development",
    text: " We provide UI/UX Design services, and of course with the best quality",
  },
  {
    icon: ComponentIcon,
    src: UiUxIcon,
    title: "UI / UX Designer",
    text: " We provide UI/UX Design services, and of course with the best quality",
  },
  {
    icon: FileImageIcon,
    src: GraphicsIcon,
    title: "Graphic Design",
    text: " We provide UI/UX Design services, and of course with the best quality",
  },
  {
    icon: ActivityIcon,
    src: MotionGraphicIcon,

    title: "Motion Graphics",
    text: " We provide UI/UX Design services, and of course with the best quality",
  },
  {
    icon: CameraIcon,
    src: PhotographyIcon,

    title: "Photography",
    text: " We provide UI/UX Design services, and of course with the best quality",
  },
  {
    icon: ClapperboardIcon,
    src: VideographyIcon,

    title: "Videography",
    text: " We provide UI/UX Design services, and of course with the best quality",
  },
];

export const portfolios = [PortfolioOne, PortfolioTwo, PortfolioThree];

export const footerLinks = [
  "Support",
  "Privacy Policy",
  "Terms And Conditions",
];

export const NavLinks = ["Home", "About", "Services", "Contact"];
