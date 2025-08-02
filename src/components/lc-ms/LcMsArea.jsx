"use client";
import React, { useState, useEffect } from "react";
import DataTable from "../../common/DataTable";
import { Tooltip } from 'react-tooltip';

const LcMsArea = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  const features = [
    "Exceptional Purity: These solvents are highly purified to minimize residues, contaminants, and metal ions. This prevents instrument clogging, reduces background noise, and ensures accurate measurement of target substances",
    "Enhanced Detection: Their purity allows for the detection of very small amounts of substances, leading to better sensitivity and clearer signals. ",
    "Consistent Results: Each batch is uniform, ensuring that analytical methods work reliably across different tests and over time. ",
    "Increased Instrument Longevity: Low levels of impurities protect the LC-MS equipment, extending its operational life and reducing maintenance. ",
    "Clear UV Readings: For methods using UV detection, these solvents provide stable baselines and high sensitivity.",
    "Performance Verified: Manufacturers specifically test each batch to confirm its suitability for demanding LC-MS applications.",
    "Fewer Analytical Problems: Using pure solvents significantly reduces issues caused by contamination, saving time and effort.",
  ];

    const columns = [
    {
      name: "Product Code",
      selector: (row) => row.ProductCode,
      sortable: false,
      grow: 2,
       cell: (row) => {
      const tooltipId = `tooltip-${row.ProductCode}`;
      return (
        <>
          <span
            data-tooltip-id={tooltipId}
            data-tooltip-content={`${row.product_name}`}
          >
            {row.ProductCode}
          </span>
          <Tooltip id={tooltipId} place="top" />
        </>
      );
    },
    },
    {
      name: "Product Description",
      selector: (row) => row.product_name,
      sortable: false,
      grow: 2,
      cell: (row) => {
          const tooltipId = `desc-tooltip-${row.ProductCode}`;
          const productName = row.product_name || "Unnamed Product";
      
          return (
            <>
              <span
                data-tooltip-id={tooltipId}
                data-tooltip-content={` ${productName}`}
              >
                {productName}
              </span>
              <Tooltip id={tooltipId} place="top" />
            </>
          );
        },
    },
    {
      name: "CAS No.",
      selector: (row) => row.CASNo,
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
      ))}
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
      ))}
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
        ⬇️ 
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
    formData.append("category", "LC-MS Solvents");

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
        console.error("Error fetching products:", data.message);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Helper function to render feature text with bold title
  const renderFeatureText = (feature) => {
    const colonIndex = feature.indexOf(":");
    if (colonIndex === -1) return feature;

    const title = feature.substring(0, colonIndex);
    const description = feature.substring(colonIndex);

    return (
      <>
        <strong>{title}</strong>
        {description}
      </>
    );
  };
  return (
    <section className="shop-area pt-120 pb-70">
      <div className="container">
        <div className="shop-left-right ml-130 mr-130">
          <div className="row align-items-center">
            {/* Left - Product Image */}
            <div className="col-lg-6 col-md-6">
              <div
                className="productthumb mb-40 wow fadeInRighLeft"
                data-wow-delay=".4s"
              >
                <img
                  src="/assets/img/productdetails/LC-MS_solvent.svg"
                  alt="product-thumb"
                />
              </div>
            </div>

            {/* Right - Description */}
            <div className="col-lg-6 col-md-6">
              <div
                className="product mb-40 ml-20 wow fadeInRighRight"
                data-wow-delay=".4s"
              >
                <div className="product__details-content mb-40">
                  <h5 className="product-dtitle mb-30">LC-MS SOLVENTS</h5>
                  <p className="pd-description">
                    LC-MS solvents are highly specialized, ultra-high purity
                    solvents used in Liquid Chromatography-Mass Spectrometry
                    (LC-MS), a powerful analytical technique that combines the
                    separation capabilities of liquid chromatography with the
                    identification and quantification abilities of mass
                    spectrometry. LC-MS grade solvents provide substantial
                    benefits for precise and reliable Liquid Chromatography-Mass
                    Spectrometry.n essence, LC-MS solvents are meticulously
                    crafted to meet the stringent demands of LC-MS, guaranteeing
                    superior data quality, extended instrument lifespan, and
                    dependable analytical outcomes.
                  </p>
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
                        <p className="pd-feature-text">
                          {renderFeatureText(feature)}
                        </p>
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

export default LcMsArea;
