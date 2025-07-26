// "use client";
// import React, { useState, useEffect } from "react";
// import DataTable from "../../common/DataTable";

// const GCReferenceStandardsArea = () => {
//   const [productData, setProductData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const features = [
//     "Certified reference standards for accurate GC calibration.",
//     "Traceable to international standards.",
//     "High purity and stability for reliable results.",
//     "Available in a variety of concentrations and matrices."
//   ];

//   const columns = [
//     {
//       name: "Code",
//       selector: (row) => row.ProductCode,
//       sortable: true,
//     },
//     {
//       name: "Product Description",
//       selector: (row) => row.product_name,
//       sortable: true,
//     },
//     {
//       name: "CAS No.",
//       selector: (row) => row.CASNo,
//       sortable: true,
//     },
//     {
//       name: "Grade",
//       selector: (row) => row.Grade,
//       sortable: true,
//     },
//     {
//       name: "Pack Size",
//       selector: (row) => row.PackSize,
//       sortable: true,
//     },
//     {
//       name: "PDF",
//       selector: (row) =>
//         row.msds_url ? (
//           <a
//             href={row.msds_url}
//             target="_blank"
//             rel="noopener noreferrer"
//             title="Download PDF"
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               style={{ width: "24px", height: "24px", color: "#2e7d32" }}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v6m0 0l-3-3m3 3l3-3m-6-6h6"
//               />
//             </svg>
//           </a>
//         ) : (
//           "N/A"
//         ),
//       sortable: false,
//     },
//   ];

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     setLoading(true);
//     const formData = new FormData();
//     formData.append("category", "GC Reference Standards");

//     try {
//       const response = await fetch(
//         "https://api.dimerscientific.com/get_category_products.php",
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       const data = await response.json();
//       if (data.status === "success") {
//         setProductData(data.data);
//       } else {
//         console.error("Error fetching products:", data.message);
//       }
//     } catch (error) {
//       console.error("Fetch error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="shop-area pt-120 pb-70">
//       <div className="container">
//         <div className="shop-left-right ml-130 mr-130">
//           <div className="row">
//             {/* Left - Product Image */}
//             <div className="col-lg-6 col-md-6">
//               <div
//                 className="productthumb mb-40 wow fadeInRighLeft"
//                 data-wow-delay=".4s"
//               >
//                 <img
//                   src="/assets/img/productdetails/gchc.png"
//                   alt="product-thumb"
//                 />
//               </div>
//             </div>

//             {/* Right - Description */}
//             <div className="col-lg-6 col-md-6">
//               <div
//                 className="product mb-40 ml-20 wow fadeInRighRight"
//                 data-wow-delay=".4s"
//               >
//                 <div className="product__details-content mb-40">
//                   <h5 className="product-dtitle mb-30">GC REFERENCE STANDARDS</h5>
//                   <p className="pd-description">
//                     Our GC reference standards are certified and traceable to international standards, ensuring accurate calibration and validation of your gas chromatography instruments.
//                   </p>

//                   <div className="row">
//                     {features.map((feature, index) => (
//                       <div key={index} className="col-sm-6 mb-3">
//                         <div className="pd-arrow-point">
//                           <span className="pd-arrow-icon">➤</span>
//                           <p className="pd-arrow-text">{feature}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Features & Benefits */}
//           <div className="row mb-5">
//             <div className="col-12">
//               <div className="pd-feature-section">
//                 <div className="pd-bg-circle-1"></div>
//                 <div className="pd-bg-circle-2"></div>

//                 <div className="text-center mb-4">
//                   <h2>Features & Benefits</h2>
//                   <div className="pd-section-underline"></div>
//                 </div>

//                 <div className="row">
//                   {features.map((feature, index) => (
//                     <div key={index} className="col-md-6 mb-3">
//                       <div className="pd-feature-card">
//                         <div className="pd-check-circle">
//                           <span className="pd-check-mark">✓</span>
//                         </div>
//                         <p className="pd-feature-text">{feature}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Product Table */}
//           <div className="row mb-5">
//             <div className="col-12">
//               <div className="text-center">
//                 <h2 className="mb-3">Products</h2>
//               </div>
//               {loading ? (
//                 <p className="text-center">Loading products...</p>
//               ) : (
//                 <DataTable columns={columns} data={productData} />
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GCReferenceStandardsArea; 

"use client";
import React, { useState, useEffect } from "react";
import DataTable from "../../common/DataTable";

const GCReferenceStandardsArea = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  const standardData = [
    "Certificate of Analysis (COA)",
    "GC/HPLC Purity Report",
    "¹H-NMR Spectrum",
    "Infrared (IR) Spectrum",
    "Mass Spectrometry (MS) Data"
  ];

  const additionalData = [
    "¹³C-NMR (Carbon-13 Nuclear Magnetic Resonance)",
    "TGA (Thermogravimetric Analysis) for potency or thermal stability studies",
    "Other specialized data as required"
  ];

  const advancedOfferings = [
    "Secondary Reference Standards developed in-house and fully traceable to certified Primary Standards",
    "Customization Services for clients with specific analytical or formulation needs"
  ];

  const columns = [
    {
      name: "Product Code",
      selector: (row) => row.ProductCode,
      sortable: false,
    },
    {
      name: "Product Description",
      selector: (row) => row.product_name,
      sortable: false,
    },
    {
      name: "CAS No.",
      selector: (row) => row.CASNo,
      sortable: false,
    },
    {
      name: "Grade",
      selector: (row) => row.Grade,
      sortable: false,
    },
    {
      name: "Pack Size",
      cell: (row) => (
        <div>
          {row.packs?.map((p, index) => (
            <div
              key={index}
              style={{ lineHeight: "1.8", paddingBottom: "6px", borderBottom: index !== row.packs.length - 1 ? "1px solid #eee" : "none" }}
            >
              {p.pack_size}
            </div>
          )) || row.PackSize}
        </div>
      ),
      sortable: false,
    },
    {
      name: "Price (INR)",
      cell: (row) => (
        <div>
          {row.packs?.map((p, index) => (
            <div
              key={index}
              style={{
                lineHeight: "1.8",
                paddingBottom: "6px",
                borderBottom: index !== row.packs.length - 1 ? "1px solid #eee" : "none",
              }}
            >
              INR {Number(p.price).toFixed(2).replace(/\.00$/, "")}
            </div>
          )) || "-"}
        </div>
      ),
      sortable: false,
    },
    {
      name: "Stock",
      cell: (row) => <div>{row.stock ?? "0"}</div>,
      sortable: false,
    },
    {
      name: "HSN Code",
      cell: (row) => <div>{row.hsn_code || "-"}</div>,
      sortable: false,
    },
    {
      name: "GST",
      cell: (row) => <div>{row.gst || "-"}</div>,
      sortable: false,
    },
    {
      name: "MSDS",
      selector: (row) =>
        row.msds_url ? (
          <a
            href={row.msds_url}
            target="_blank"
            rel="noopener noreferrer"
            title="Download MSDS PDF"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "4px 8px",
              borderRadius: "4px",
              backgroundColor: "#eaf7f0",
              border: "1px solid #2e7d32",
              color: "#2e7d32",
              fontSize: "14px",
              gap: "4px",
              textDecoration: "none",
            }}
          >
            <span aria-hidden="true" style={{ fontSize: "16px" }}>⬇️</span>
            <span className="sr-only">Download</span>
          </a>
        ) : (
          "N/A"
        ),
      sortable: false,
    },
  ];

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("category", "GC Reference Standards");

    try {
      const response = await fetch(
        "https://api.dimerscientific.com/get_category_products.php",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      if (data.status === "success") {
        setProductData(data.data);
      } else {
        console.error("API error:", data.message);
      }
    } catch (error) {
      console.error("Network error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="shop-area pt-120 pb-70">
      <div className="container">
        <div className="shop-left-right ml-130 mr-130">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="productthumb mb-40 wow fadeInRighLeft" data-wow-delay=".4s">
                <img src="/assets/img/productdetails/GC-HS_solvent.svg" alt="product-thumb" />
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="product mb-40 ml-20 wow fadeInRighRight" data-wow-delay=".4s">
                <div className="product__details-content mb-40">
                  <h5 className="product-dtitle mb-3 mb-lg-4">GC REFERENCE STANDARDS</h5>
                  <p className="pd-description">
                    Gas Chromatography (GC) Reference Standards are high-purity chemical compounds used to calibrate, validate, and quantify analytes in GC analysis. They serve as benchmarks to ensure accuracy, precision, and reliability in analytical results.
                  </p>
                  <p className="pd-description">
                    We provide high-quality GC and HPLC Reference Standards backed by comprehensive analytical data to ensure accuracy, traceability, and regulatory compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Data Provided Section */}
          <div className="row mb-5">
            <div className="col-12">
              <div className="pd-feature-section">
                <div className="pd-bg-circle-1"></div>
                <div className="pd-bg-circle-2"></div>
                <div className="text-center mb-4">
                  <h2>We are offering below data with Every Standard</h2>
                  <div className="pd-section-underline"></div>
                </div>

                <div className="row">
                  {standardData.map((item, index) => (
                    <div key={index} className="col-md-6 mb-3">
                      <div className="pd-feature-card">
                        <div className="pd-check-circle">
                          <span className="pd-check-mark">•</span>
                        </div>
                        <p className="pd-feature-text"><strong>{item}</strong></p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Data Section */}
          <div className="row mb-5">
            <div className="col-12">
              <div className="pd-feature-section">
                <div className="pd-bg-circle-1"></div>
                <div className="pd-bg-circle-2"></div>
                <div className="text-center mb-4">
                  <h2>Additional Data Available Upon Request</h2>
                  <div className="pd-section-underline"></div>
                </div>

                <div className="row">
                  {additionalData.map((item, index) => (
                    <div key={index} className="col-md-6 mb-3">
                      <div className="pd-feature-card">
                        <div className="pd-check-circle">
                          <span className="pd-check-mark">•</span>
                        </div>
                        <p className="pd-feature-text">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Offerings Section */}
          <div className="row mb-5">
            <div className="col-12">
              <div className="pd-feature-section">
                <div className="pd-bg-circle-1"></div>
                <div className="pd-bg-circle-2"></div>
                <div className="text-center mb-4">
                  <h2>Advanced Offerings</h2>
                  <div className="pd-section-underline"></div>
                </div>

                <div className="row">
                  {advancedOfferings.map((item, index) => (
                    <div key={index} className="col-md-6 mb-3">
                      <div className="pd-feature-card">
                        <div className="pd-check-circle">
                          <span className="pd-check-mark">•</span>
                        </div>
                        <p className="pd-feature-text">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Table */}
      <div className="row mb-5 mx-3">
        <div className="col-12">
          <div className="text-center">
            <h2 className="mb-3">Products</h2>
          </div>
          {loading ? (
            <p className="text-center">Loading products...</p>
          ) : (
            <DataTable columns={columns} data={productData} />
          )}
        </div>
      </div>
    </section>
  );
};

export default GCReferenceStandardsArea;
