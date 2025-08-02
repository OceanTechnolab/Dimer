import React from "react";
import Wrapper from "@/layout/wrapper";
import SEO from "@/components/seo";
import Chemistryproduct from "@/components/Chemistry-product/chemistry-product";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Chemistry" />
      <Chemistryproduct />
    </Wrapper>
  );
};

export default index;
