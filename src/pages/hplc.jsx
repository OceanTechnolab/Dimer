import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import React from "react";
import Hplc from "@/components/hplc/hplc";

const HPLCPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="HPLC Solvents" />
      <Hplc />
    </Wrapper>
  );
};

export default HPLCPage; 