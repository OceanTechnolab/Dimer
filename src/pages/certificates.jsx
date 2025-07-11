import React from "react";
import Wrapper from "@/layout/wrapper";
import SEO from "@/components/seo";
import Certificatesmain from "@/components/Certificates/certificates-main";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Certificates" />
      <Certificatesmain />
    </Wrapper>
  );
};

export default index;
