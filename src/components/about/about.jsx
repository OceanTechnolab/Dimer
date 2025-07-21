import React from "react";
import HeaderTwo from "@/layout/header/header-two";
import Banner from "./banner";
import Aboutfirst from "./about-first"; 
import AboutArea from "./about-area";
import Counter from "@/common/counter";
import Specialists from "@/common/specialists";
import NavTab from "@/common/nav-tab";
import Team from "@/common/team";
import FooterFour from "@/layout/footer/footer-4";

const About = () => {
  return (
    <>
      <HeaderTwo />
      <Banner />
      <Aboutfirst />
      <AboutArea />
      <Counter />
      <Specialists />
      <NavTab />
      <Team />
      <FooterFour />
    </>
  );
};

export default About;
