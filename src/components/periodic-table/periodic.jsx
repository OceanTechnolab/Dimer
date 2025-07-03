import React from "react";
import Table from "./table";
import Banner from "./banner";      
import Infor from "./infor";
import HeaderTwo from "@/layout/header/header-two";
import FooterFour from "@/layout/footer/footer-4";
import SEO from "@/components/seo";
import periodic from "@/components/periodic-table/periodic";

const Periodic = () => {
  return (
    <>
      <HeaderTwo />
        <Banner />
        < Table />
        < Infor />
      <FooterFour />
    </>
  );
};

export default Periodic;