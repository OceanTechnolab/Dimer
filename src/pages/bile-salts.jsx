import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import React from "react";
import BileSalts from "@/components/bile-salts/bile-salts";

const BileSaltsPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Bile Salts & SLS" />
      <BileSalts />
    </Wrapper>
  );
};

export default BileSaltsPage; 