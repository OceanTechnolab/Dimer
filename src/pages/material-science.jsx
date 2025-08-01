import React from "react";
import Wrapper from "@/layout/wrapper";
import SEO from "@/components/seo";
import MaterialScience from "@/components/Material Science/material-science";


const index = () => {
  return (
    <Wrapper>
        <MaterialScience />
      <SEO pageTitle="Material Science" />
    </Wrapper>
  );
};

export default index;