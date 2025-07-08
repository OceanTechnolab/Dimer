import React from "react";     
import HeaderTwo from "@/layout/header/header-two";
import FooterFour from "@/layout/footer/footer-4";
import Heading from "./heading";
import Banner from "./banner"; 
import { Grid } from "swiper";
import Gridarea from "./grid-area";


const Mainpage = () => {
  return (
    <>
      <HeaderTwo />
      <Banner />
        <Heading />
        <Gridarea />
      <FooterFour />
    </>
  );
};

export default Mainpage;