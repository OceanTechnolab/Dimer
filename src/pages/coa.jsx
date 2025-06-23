import SEO from "@/components/seo";
import COA from "@/components/services/coa";
import Wrapper from "@/layout/wrapper";
import React from "react";

const coa = () => {
  return (
    <Wrapper>
      <SEO pageTitle="COA" />
      <COA />
    </Wrapper>
  );
};

export default coa;
