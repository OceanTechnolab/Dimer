import React from "react";
import HeaderTwo from "@/layout/header/header-two";
import Banner from "./banner";
import Aboutfirst from "./about-first"; 
import AboutArea from "./about-area";
import Counter from "@/common/counter";
import Specialists from "@/common/specialists";
import NavTab from "@/common/nav-tab";
import FooterFour from "@/layout/footer/footer-4";
import ImageConsole from "./image-console";

const About = () => {
  return (
    <>
      <HeaderTwo />
      <Banner />
      <Aboutfirst />
      <AboutArea />
      <ImageConsole />
      <Counter />
      <Specialists />
      <NavTab />
      <FooterFour />
    </>
  );
};

export default About;
