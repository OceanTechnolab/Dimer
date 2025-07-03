import React from "react";
import Table from "@/components/periodic-table/table";
import Wrapper from "@/layout/wrapper";
import SEO from "@/components/seo";
import Periodic from "@/components/periodic-table/periodic";

const index = () => {
  return (
    <Wrapper>
        <Periodic />
      <SEO pageTitle="Periodic Table" />
    </Wrapper>
  );
};

export default index;
