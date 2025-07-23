import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import React from "react";
import LcMs from "@/components/lc-ms/lc-ms";

const LCMSPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="LC-MS Solvents" />
      <LcMs />
    </Wrapper>
  );
};

export default LCMSPage; 