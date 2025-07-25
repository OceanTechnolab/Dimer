import React from "react";
import Banner from "./banner";      
import HeaderTwo from "@/layout/header/header-two";
import FooterFour from "@/layout/footer/footer-4";
import Policyheading from "./policy-heading";

const Policy = () => {
  return (
    <>
      <HeaderTwo />
        <Banner />
        <Policyheading />
      <FooterFour />
    </>
  );
};

export default Policy;