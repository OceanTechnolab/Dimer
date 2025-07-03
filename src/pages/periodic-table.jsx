import React from "react";
import Table from "@/components/periodic-table/table";
import Wrapper from "@/layout/wrapper";
import LayoutTwo from "@/layout/layout-2";
import SEO from "@/components/seo";
import { Info } from "lucide-react";
import Infor from "@/components/periodic-table/infor";
import { Breadcrumb } from "antd";
import Banner from "@/components/about/banner";
import FooterFour from "@/layout/footer/footer-4";
import HeaderTwo from "@/layout/header/header-two";

const index = () => {
  return (
    <Wrapper>
      <HeaderTwo />
        <SEO pageTitle="Periodic-table" />
        < Table />
        < Infor />
      <FooterFour />
    </Wrapper>
  );
};

export default index;
