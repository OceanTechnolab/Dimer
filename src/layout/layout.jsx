import React from "react";
import Footer from "./footer/footer";
import Header from "./header/header";
import HeaderTwo from "./header/header-two";

const Layout = ({ children }) => {
  return (
    <div>
      <HeaderTwo />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
