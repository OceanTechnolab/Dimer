import PricingArea from "@/common/pricing-area";
import Specialists from "@/common/specialists";
import DirectContactUs from "@/components/forms/direct-contact-us";
import FooterFour from "@/layout/footer/footer-4";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "./banner";
import ServiceArea from "./service-area";

const ServiceOne = () => {
  return (
    <>
      <HeaderTwo />
      <Banner />
      <ServiceArea />
      <Specialists />
      <PricingArea />
      <DirectContactUs />
      <FooterFour />
    </>
  );
};

export default ServiceOne;
