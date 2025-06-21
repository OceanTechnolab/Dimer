import Brands from "@/common/brands";
import React from "react";
import About from "./about";
import Appointment from "./appointment";
import Blog from "./blog";
import Counter from "../../../common/counter";
import Cta_Area from "./cta-area";
import Feedback from "./feedback";
import Gallery from "./gallery";
import HeroBanner from "./hero-banner";
import ServiceArea from "./service-area";
import Specialists from "../../../common/specialists";
import Team from "../../../common/team";

const HomeOne = () => {
  return (
    <>
      <HeroBanner />
      <ServiceArea />
      <About />
      <Counter />
      <Gallery />
      <Specialists />
      <Appointment />
      <Team />
      <Feedback />
      <Brands />
      <Cta_Area />
      <Blog />
    </>
  );
};

export default HomeOne;
