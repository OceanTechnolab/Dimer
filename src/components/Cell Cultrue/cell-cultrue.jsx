import React from "react";     
import HeaderTwo from "@/layout/header/header-two";
import FooterFour from "@/layout/footer/footer-4";
import Banner from "./banner"; 
import CellCultureArea from "./cell-cultrue-area";


const CellCulture = () => {
  return (
    <>
      <HeaderTwo />
      <Banner />
      <CellCultureArea />
      <FooterFour />
    </>
  );
};

export default CellCulture;