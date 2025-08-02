"use client";
import React, { useEffect } from "react";
import Footer from "./footer/footer";
import HeaderTwo from "./header/header-two";
import "react-toastify/dist/ReactToastify.css";

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
