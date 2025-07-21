import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import React from "react";
import Solar from "@/components/solar/solar";

const SolarPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Solar Chemicals" />
      <Solar />
    </Wrapper>
  );
};

export default SolarPage; 