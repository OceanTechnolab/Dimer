import SEO from "@/components/seo";
import TeamDetails from "@/components/team/team-details/team-details";
import Wrapper from "@/layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Team Details" />
      <TeamDetails />
    </Wrapper>
  );
};

export default index;
