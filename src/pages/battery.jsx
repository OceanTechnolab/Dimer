import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import React from "react";
import Battery from "@/components/battery/battery";

const BatteryPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Battery Materials" />
      <Battery />
    </Wrapper>
  );
};

export default BatteryPage; 