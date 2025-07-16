import React from "react";     
import HeaderTwo from "@/layout/header/header-two";
import FooterFour from "@/layout/footer/footer-4";
import Heading from "./heading";
import Banner from "./banner"; 
import Gridarea from "./grid-area";
import Facility from "./facility";
import Agreement from "./agreement";
import Benefits from "./benefits";
import ContactUs from "./contactus";


const Mainpage = () => {
  return (
    <>
      <HeaderTwo />
      <Banner />
        <Heading />
        <Gridarea />
        <Facility />
        <Agreement />
        <Benefits />
        <ContactUs />
      <FooterFour />
    </>
  );
};

export default Mainpage;