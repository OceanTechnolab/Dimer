import React from "react";     
import HeaderTwo from "@/layout/header/header-two";
import FooterFour from "@/layout/footer/footer-4";
import Banner from "./banner"; 
import MaterialScienceArea from "./material-science-area";


const MaterialScience = () => {
  return (
    <>
      <HeaderTwo />
      <Banner />
      <MaterialScienceArea />
      <FooterFour />
    </>
  );
};

export default MaterialScience;