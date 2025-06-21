import FooterFour from "@/layout/footer/footer-4";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import DirectContactUs from "../forms/direct-contact-us";
import FaqArea from "./faq-area";
import FaqBanner from "./faq-banner";

const FAQ = () => {
  return (
    <>
      <HeaderTwo />
      <FaqBanner />
      <FaqArea />
      <DirectContactUs />
      <FooterFour />
    </>
  );
};

export default FAQ;
