import Terms from "@/components/conditions/terms";
import Wrapper from "@/layout/wrapper";
import React from "react";
import SEO from "@/components/seo";

const Index =() =>{
    return (
    <Wrapper>
      <SEO pageTitle="conditions" />
       <Terms />
    </Wrapper>
    );
};

export default Index;