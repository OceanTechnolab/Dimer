import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import React from "react";
import IonPairing from "@/components/ion-pairing/ion-pairing";

const IonPairingPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Ion Pairing Reagents" />
      <IonPairing />
    </Wrapper>
  );
};

export default IonPairingPage; 