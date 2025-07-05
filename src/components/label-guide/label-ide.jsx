import React from "react";
import Banner from "./banner";      
import HeaderTwo from "@/layout/header/header-two";
import FooterFour from "@/layout/footer/footer-4";
import Labelheading from "./label-heading";
import LabelImage from "./label-image";


const labelIde = () => {
  return (
    <>
      <HeaderTwo />
        <Banner />
        <LabelImage />
        <Labelheading />
      <FooterFour />
    </>
  );
};

export default labelIde;