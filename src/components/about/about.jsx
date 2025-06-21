import Counter from "@/common/counter";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import AboutArea from "./about-area";
import Banner from "./banner";
import Specialists from "@/common/specialists";
import NavTab from "@/common/nav-tab";
import Team from "@/common/team";
import FooterFour from "@/layout/footer/footer-4";

const About = () => {
  return (
    <>
      <HeaderTwo />
      <Banner />
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
