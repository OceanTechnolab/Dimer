import React, { useState } from "react";
import DataTable from '../../common/DataTable';

const GcHcArea = () => {
  const [productData] = useState([
    {
      code: "D10455",
      description: "N,N-DIMETHYLFORMAMIDE",
      cas: "68-12-2",
    },
    {
      code: "D10456",
      description: "DIMETHYL SULPHOXIDE",
      cas: "67-68-5",
    },
    {
      code: "M10289",
      description: "N-METHYL-2-PYRROLIDONE",
      cas: "872-50-4",
    },
    {
      code: "D10476",
      description: "N,N-DIMETHYLACETAMIDE",
      cas: "127-19-5",
    },
  ]);

  const features = [
    "Each batch is subjected to GC-HS analysis to ensure suitability for residual analysis in excipients or API.",
    "Remarkable quality and low residue levels due to glass distilled GC-HS solvents.",
    "Appropriately clean chromatogram in the appropriate elution range with a stable base line and minimal signal-to-noise ratio.",
    "Low water content & High UV transmission.",
  ];

  const columns = [
    {
      name: 'Code',
      selector: row => row.code,
      sortable: false,
    },
    {
      name: 'Product Description',
      selector: row => row.description,
      sortable: false,
    },
    {
      name: 'CAS No.',
      selector: row => row.cas,
      sortable: false,
    },
  ];

  return (
    <section className="shop-area pt-120 pb-70">
      <div className="container">
        <div className="shop-left-right ml-130 mr-130">
          <div className="row">
            {/* Left - Product Image */}
            <div className="col-lg-6 col-md-6">
              <div className="productthumb mb-40 wow fadeInRighLeft" data-wow-delay=".4s">
                <img src="/assets/img/productdetails/gchc.png" alt="product-thumb" />
              </div>
            </div>

            {/* Right - Description */}
            <div className="col-lg-6 col-md-6">
              <div className="product mb-40 ml-20 wow fadeInRighRight" data-wow-delay=".4s">
                <div className="product__details-content mb-40">
                  <h5 className="product-dtitle mb-30">HEAD-SPACE SOLVENTS</h5>
                  <p className="pd-description">
                    GC-Headspace (GC-HS) is the technique used to determine Organic Volatile Impurities (OVIs) in pharmaceutical products. Our specialized solvents are designed to be free from volatile impurities that may interfere with GC-HS analysis, following USP 467 and EP 2.4.24 guidelines.
                  </p>

                  <div className="row">
                    <div className="col-sm-6 mb-3">
                      <div className="pd-arrow-point">
                        <span className="pd-arrow-icon">➤</span>
                        <p className="pd-arrow-text">GC-HS analysis for excipients & APIs</p>
                      </div>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <div className="pd-arrow-point">
                        <span className="pd-arrow-icon">➤</span>
                        <p className="pd-arrow-text">Glass-distilled solvents with low residue</p>
                      </div>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <div className="pd-arrow-point">
                        <span className="pd-arrow-icon">➤</span>
                        <p className="pd-arrow-text">Clean chromatograms with low noise</p>
                      </div>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <div className="pd-arrow-point">
                        <span className="pd-arrow-icon">➤</span>
                        <p className="pd-arrow-text">Low water content & high UV transmission</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features & Benefits */}
          <div className="row mb-5">
            <div className="col-12">
              <div className="pd-feature-section">
                <div className="pd-bg-circle-1"></div>
                <div className="pd-bg-circle-2"></div>

                <div className="text-center mb-4">
                  <h2>Features & Benefits</h2>
                  <div className="pd-section-underline"></div>
                </div>

                <div className="row">
                  {features.map((feature, index) => (
                    <div key={index} className="col-md-6 mb-3">
                      <div className="pd-feature-card">
                        <div className="pd-check-circle">
                          <span className="pd-check-mark">✓</span>
                        </div>
                        <p className="pd-feature-text">{feature}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Table */}
          <div className="row mb-5">
            <div className="col-12">
              <div className="text-center">
                <h2 className="mb-3">Products</h2>
              </div>
              <DataTable columns={columns} data={productData} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GcHcArea;
