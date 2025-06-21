import FooterFour from "@/layout/footer/footer-4";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "./banner";
import ProductDetailsArea from "./product-details-area";

const ProductDetails = () => {
  return (
    <>
      <HeaderTwo />
      <Banner />
      <ProductDetailsArea />
      <FooterFour />
    </>
  );
};

export default ProductDetails;
