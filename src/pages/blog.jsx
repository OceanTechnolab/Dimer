import Blog from "@/components/blog";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import React from "react";

function index() {
  return (
    <Wrapper>
      <SEO pageTitle="Blog" />
      <Blog />
    </Wrapper>

  );
}

export default index;
