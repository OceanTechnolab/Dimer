import React from "react";
import Table from "@/components/periodic-table/table";
import Wrapper from "@/layout/wrapper";
import SEO from "@/components/seo";
import Periodic from "@/components/periodic-table/periodic";
import Applications from "@/components/application/applications";

const index = () => {
  return (
    <Wrapper>
        <Applications />
      <SEO pageTitle="Periodic Table" />
    </Wrapper>
  );
};

export default index;