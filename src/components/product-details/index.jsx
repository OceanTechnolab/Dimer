import FooterFour from "@/layout/footer/footer-4";
import Header from "@/layout/header/header";
import React from "react";
import Banner from "./banner";
import ProductDetailsArea from "./product-details-area";

const ProductDetails = () => {
  return (
    <>
      <Header />
      <Banner />
      <ProductDetailsArea />
      <FooterFour />
    </>
  );
};

export default ProductDetails;
