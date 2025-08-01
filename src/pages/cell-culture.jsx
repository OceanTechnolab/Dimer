import React from "react";
import Wrapper from "@/layout/wrapper";
import SEO from "@/components/seo";
import CellCulture from "@/components/Cell Culture/cell-cultrue";


const index = () => {
  return (
    <Wrapper>
    <CellCulture />
      <SEO pageTitle="Cell Culture" />
    </Wrapper>
  );
};

export default index;