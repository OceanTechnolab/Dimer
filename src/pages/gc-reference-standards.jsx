import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import React from "react";
import GCReferenceStandards from "@/components/gc-reference-standards/gc-reference-standards";

const GCReferenceStandardsPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="GC Reference Standards" />
      <GCReferenceStandards />
    </Wrapper>
  );
};

export default GCReferenceStandardsPage; 