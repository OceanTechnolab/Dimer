import SEO from "@/components/seo";
import ServiceOne from "@/components/services/service/service-one";
import Wrapper from "@/layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Services" />
      <ServiceOne />
    </Wrapper>
  );
};

export default index;
