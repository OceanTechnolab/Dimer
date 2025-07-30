import Analyte from "@/components/Analyte/analyte";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Analyte"} />
      <Analyte />
    </Wrapper>
  );
};

export default index;
