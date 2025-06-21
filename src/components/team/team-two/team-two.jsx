import DirectContactUs from "@/components/forms/direct-contact-us";
import FooterFour from "@/layout/footer/footer-4";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import BannerTeamTwo from "./banner-team-two";
import TeamArea from "./team-area";

const TeamTwo = () => {
  return (
    <>
      <HeaderTwo />
      <BannerTeamTwo />
      <TeamArea />
      <DirectContactUs />
      <FooterFour />
    </>
  );
};

export default TeamTwo;
