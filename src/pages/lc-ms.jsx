import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import React from "react";

const LCMSPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="LC-MS Solvents" />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1>LC-MS Solvents</h1>
            <p>Premium solvents for Liquid Chromatography Mass Spectrometry applications.</p>
            {/* Add your content here */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default LCMSPage; 