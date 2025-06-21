import React from "react";
import Footer from "./footer/footer";
import Header from "./header/header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
