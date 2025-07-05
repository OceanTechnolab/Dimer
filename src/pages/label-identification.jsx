import React from "react";
import Wrapper from "@/layout/wrapper";
import SEO from "@/components/seo";
import LabelIde from "@/components/label-guide/label-ide";

const index = () => {
  return (
    <Wrapper>
      <LabelIde />
      <SEO pageTitle="Label Identification Guide" />
    </Wrapper>
  );
};

export default index;
