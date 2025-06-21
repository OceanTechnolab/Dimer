import HomeTwo from "@/components/home/home-2/hometwo";
import SEO from "@/components/seo";
import LayoutTwo from "@/layout/layout-2";
import Wrapper from "@/layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <LayoutTwo>
      <SEO pageTitle="Home Two" />
        <HomeTwo />
      </LayoutTwo>
    </Wrapper>
  );
};

export default index;
