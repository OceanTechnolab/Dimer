import FooterFour from "@/layout/footer/footer-4";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "./banner";
import BuildingBlocksArea from "./BuildingBlocksArea";

const BuildingBlocks = () => {
  return (
    <>
      <HeaderTwo />
      <Banner />
      <BuildingBlocksArea />
      <FooterFour />
    </>
  );
};

export default BuildingBlocks; 