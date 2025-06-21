import React from "react";
import Home_Three from "@/components/home/home-3/home-three";
import SEO from "@/components/seo";
import LayoutThree from "@/layout/layout-3";
import Wrapper from "@/layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <LayoutThree>
      <SEO pageTitle="Home Three" />
        <Home_Three />
      </LayoutThree>
    </Wrapper>
  );
};

export default index;
