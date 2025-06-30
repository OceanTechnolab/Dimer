import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import React from "react";

const GCReferenceStandardsPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="GC Reference Standards" />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1>GC Reference Standards</h1>
            <p>Certified reference standards for Gas Chromatography analysis and calibration.</p>
            {/* Add your content here */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default GCReferenceStandardsPage; 