import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import React from "react";

const HPLCPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="HPLC Solvents" />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1>HPLC Solvents</h1>
            <p>High-performance liquid chromatography solvents for analytical applications.</p>
            {/* Add your content here */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HPLCPage; 