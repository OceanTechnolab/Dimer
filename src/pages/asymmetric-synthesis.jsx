import React from "react";
import Wrapper from "@/layout/wrapper";
import SEO from "@/components/seo";
import Biological from "@/components/Biological-buffers/biological";
import Biologicalbuffers from "@/components/Biological-buffers/biological-buffers";
import Chemistry from "@/components/Chemistry/chemistry";

const index = () => {
  return (
    <Wrapper>
        <Chemistry />
      <SEO pageTitle="asymmetric-synthesis" />
    </Wrapper>
  );
};

export default index;