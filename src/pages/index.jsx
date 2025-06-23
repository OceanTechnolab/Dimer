import React from "react";
import Layout from "@/layout/layout";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import HomeTwo from "@/components/home/home-2/hometwo";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Home" />
      <Layout>
        <HomeTwo />
      </Layout>
    </Wrapper>
  );
};

export default index;
