import React from "react";
import Wrapper from "@/layout/wrapper";
import SEO from "@/components/seo";
import Application from "@/components/application/application";

const index = () => {
  return (
    <Wrapper>
        <Application />
      <SEO pageTitle="Applications" />
    </Wrapper>
  );
};

export default index;