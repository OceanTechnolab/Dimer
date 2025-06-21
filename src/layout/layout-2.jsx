import React from "react";
import FooterTwo from "./footer/footer-2";
import HeaderTwo from "./header/header-two";

const LayoutTwo = ({ children }) => {
  return (
    <>
      <HeaderTwo />
      <main>{children}</main>
      <FooterTwo />
    </>
  );
};

export default LayoutTwo;
