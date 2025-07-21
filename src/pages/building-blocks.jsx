import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import React from "react";
import BuildingBlocks from "@/components/building-blocks/building-blocks";

const BuildingBlocksPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Building Blocks" />
      <BuildingBlocks />
    </Wrapper>
  );
};

export default BuildingBlocksPage; 