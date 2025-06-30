import ContactUs from "@/components/contact/contact";
import GcHS from "@/components/gc-hs/gc-hs";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"GC HS"} />
      <GcHS />
    </Wrapper>
  );
};

export default index;
