import FooterFour from "@/layout/footer/footer-4";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import ShopArea from "./shop-area";
import ShopBanner from "./shop-banner";

const Shop = () => {
  return (
    <>
      <HeaderTwo />
      <ShopBanner />
      <ShopArea />
      <FooterFour />
    </>
  );
};

export default Shop;
