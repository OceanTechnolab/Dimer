import React from "react";
import FooterThree from "./footer/footer-3";
import HeaderThree from "./header/header-three";

const LayoutThree = ({ children }) => {
  return (
    <>
      <HeaderThree  />
      <main>{children}</main>
      <div className="content-layout-right">
        <FooterThree />
      </div>
    </>
  );
};

export default LayoutThree;
