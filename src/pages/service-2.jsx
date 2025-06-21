import SEO from "@/components/seo";
import ServiceTwo from "@/components/services/service-two";
import Wrapper from "@/layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Service 2" />
      <ServiceTwo />
    </Wrapper>
  );
};

export default index;
