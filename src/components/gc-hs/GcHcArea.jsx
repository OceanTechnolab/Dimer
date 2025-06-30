// import React, { useState } from "react";

// // product_item_list data
// const product_item_list = [
//   {
//     id: 1,
//     title: "Features",
//     active: "active",
//     li_id: "features-tab",
//     data_bs_target: "features",
//     aria_controls: "features",
//     aria_selected: true,
//   },
//   {
//     id: 2,
//     title: "Benefits",
//     active: "",
//     li_id: "benefits-tab",
//     data_bs_target: "benefits",
//     aria_controls: "benefits",
//     aria_selected: false,
//   }
// ];

// const GcHcArea = () => {

//   const [productData] = useState([
//     {
//       code: "D10455",
//       description: "N,N-DIMETHYLFORMAMIDE",
//       cas: "68-12-2",
//     },
//     {
//       code: "D10456",
//       description: "DIMETHYL SULPHOXIDE",
//       cas: "67-68-5",
//     },
//     {
//       code: "M10289",
//       description: "N-METHYL-2-PYRROLIDONE",
//       cas: "872-50-4",
//     },
//     {
//       code: "D10476",
//       description: "N,N-DIMETHYLACETAMIDE",
//       cas: "127-19-5",
//     },
//   ]);

//   return (
//     <>
//       <section className="shop-area pt-120 pb-70">
//         <div className="container">
//           <div className="shop-left-right ml-130 mr-130">
//             <div className="row">
//               <div className="col-lg-6 col-md-6">
//                 <div
//                   className="productthumb mb-40 wow fadeInRighLeft"
//                   data-wow-delay=".4s"
//                 >
//                   <img
//                     src="/assets/img/shop/product-01.jpg"
//                     alt="product-thumb"
//                   />
//                 </div>
//               </div>
//               <div className="col-lg-6 col-md-6">
//                 <div
//                   className="product mb-40 ml-20 wow fadeInRighRight"
//                   data-wow-delay=".4s"
//                 >
//                   <div className="product__details-content mb-40">
//                     <h5 className="product-dtitle mb-20">Medical Hand Glabs</h5>
//                     <p className="mb-20">
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                       sed do eiusmod tempor incididunt ut labore et dolore magna
//                       aliqua. Ut enim ad minim veniam, quis nostrud exercitation
//                       ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                     </p>
//                     <p className="mb-30">
//                       Duis aute irure dolor in reprehenderit in voluptate velit
//                       esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
//                       occaecat cupidatat non proident, sunt in culpa qui officia
//                       deserunt mollit anim id est laborum.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="productdetails pt-35 pb-75">
//               <div className="row">
//                 <div className="col-lg-12">
//                   <div className="product-additional-tab">
//                     <div className="pro-details-nav mb-40">
//                       <ul
//                         className="nav nav-tabs pro-details-nav-btn"
//                         id="myTabs"
//                         role="tablist"
//                       >
//                         {product_item_list.map((item) => (
//                           <li
//                             key={item.id}
//                             className="nav-item"
//                             role="presentation"
//                           >
//                             <button
//                               className={`nav-links ${item.active}`}
//                               id={item.li_id}
//                               data-bs-toggle="tab"
//                               data-bs-target={`#${item.data_bs_target}`}
//                               type="button"
//                               role="tab"
//                               aria-controls={item.aria_controls}
//                               aria-selected={item.aria_selected}
//                             >
//                              {item.title}
//                             </button>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                     <div
//                       className="tab-content tp-content-tab"
//                       id="myTabContent-2"
//                     >
//                       <div
//                         className="tab-para tab-pane fade show active"
//                         id="features"
//                         role="tabpanel"
//                         aria-labelledby="features-tab"
//                       >
//                         <h5 className="mb-20">Product Features</h5>
//                         <ul className="list-unstyled">
//                           <li className="mb-15">• High-quality medical grade materials</li>
//                           <li className="mb-15">• Latex-free and powder-free construction</li>
//                           <li className="mb-15">• Enhanced grip texture for better handling</li>
//                           <li className="mb-15">• Ambidextrous design for universal fit</li>
//                           <li className="mb-15">• Available in multiple sizes</li>
//                           <li className="mb-15">• Single-use disposable design</li>
//                           <li className="mb-15">• Meets international safety standards</li>
//                           <li className="mb-15">• Chemical resistant properties</li>
//                         </ul>
//                       </div>

//                       <div
//                         className="tab-pane fade"
//                         id="benefits"
//                         role="tabpanel"
//                         aria-labelledby="benefits-tab"
//                       >
//                         <h5 className="mb-20">Product Benefits</h5>
//                         <ul className="list-unstyled">
//                           <li className="mb-15">• Superior protection against contamination</li>
//                           <li className="mb-15">• Comfortable extended wear without fatigue</li>
//                           <li className="mb-15">• Excellent tactile sensitivity for precision work</li>
//                           <li className="mb-15">• Reduced risk of allergic reactions</li>
//                           <li className="mb-15">• Cost-effective solution for medical facilities</li>
//                           <li className="mb-15">• Enhanced safety for healthcare professionals</li>
//                           <li className="mb-15">• Improved patient care and hygiene</li>
//                           <li className="mb-15">• Reliable barrier protection</li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Product Table Section */}
//             <div className="row mb-5">
//               <div className="col-12">
//                 <div className="text-center"><h4 className="mb-3">Products</h4></div>
//                 <div className="table-responsive">
//                   <table className="table table-bordered">
//                     <thead>
//                       <tr>
//                         <th>Code</th>
//                         <th>Product Description</th>
//                         <th>CAS No.</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {productData.map((product, index) => (
//                         <tr key={index}>
//                           <td>{product.code}</td>
//                           <td>{product.description}</td>
//                           <td>{product.cas}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default GcHcArea;

// second option

import React, { useState } from "react";

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
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Code</th>
                      <th>Product Description</th>
                      <th>CAS No.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productData.map((product, index) => (
                      <tr key={index}>
                        <td>{product.code}</td>
                        <td>{product.description}</td>
                        <td>{product.cas}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GcHcArea;
