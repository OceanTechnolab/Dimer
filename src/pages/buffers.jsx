import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import React from "react";
import Buffers from "@/components/buffers/buffers";

const BuffersPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Biological Buffers" />
      <Buffers />
    </Wrapper>
  );
};

export default BuffersPage; 