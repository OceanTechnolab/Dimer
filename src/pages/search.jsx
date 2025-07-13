import Search from "@/components/search/search";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"contact us"} />
      <Search />
    </Wrapper>
  );
};

export default index;