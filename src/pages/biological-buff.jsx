import React from "react";
import Wrapper from "@/layout/wrapper";
import SEO from "@/components/seo";
import Biologicalbuffers from "@/components/Biological-buffers/biological-buffers";

const index = () => {
  return (
    <Wrapper>
        <Biologicalbuffers />
      <SEO pageTitle="Biological buffers" />
    </Wrapper>
  );
};

export default index;