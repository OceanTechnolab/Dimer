import React from "react";
import Wrapper from "@/layout/wrapper";
import SEO from "@/components/seo";
import Heading from "@/components/manufacturing-page/heading";
import Mainpage from "@/components/manufacturing-page/main-page";


const index = () => {
  return (
    <Wrapper>
        <Mainpage />
      <SEO pageTitle="Periodic Table" />
    </Wrapper>
  );
};

export default index;