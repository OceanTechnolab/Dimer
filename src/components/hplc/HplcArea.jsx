"use client";
import React, { useState, useEffect } from "react";
import DataTable from "../../common/DataTable";

const HplcArea = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  const features = [
    "Exceptional Purity: HPLC solvent purity is paramount. Solvents are rigorously purified to eliminate non-volatile residues, UV-absorbing impurities, particulates, and metal ions. Higher purity levels are available across different grades, including HPLC, Gradient, and LC-MS.",
    "Improved Baseline Stability: Degassed and pure solvents lead to a stable baseline, which is critical for accurate integration of peaks and sensitive detection, especially in gradient methods.",
    "Compliance with Regulatory Standards: For industries like pharmaceuticals and food safety, using specified HPLC-grade solvents is often a regulatory requirement to ensure data integrity and product safety.",
    "Reduced Instrument Downtime: By minimizing contamination and backpressure issues, high-quality solvents contribute to smoother HPLC system operation and reduce the need for maintenance or repairs.",
    "Extended Column Lifespan: Particulate-free and non-reactive solvents prevent column clogging, degradation of the stationary phase, and damage to the sensitive HPLC components, thereby prolonging the life of expensive columns.",
    "Superior Resolution & Enhanced Sensitivity: Precise polarity control in HPLC solvents ensures optimal interaction with the stationary phase, which leads to better separation of complex mixtures and improved peak resolution. Simultaneously, their low UV absorbance allows for the detection of even trace amounts of analytes without background interference, significantly enhancing the method's overall sensitivity."
  ];

  const columns = [
    {
      name: "Product Code",
      selector: (row) => row.ProductCode,
       grow: 2,
      sortable: false,
    },
    {
      name: "Product Description",
      selector: (row) => row.product_name,
      grow: 2,
      sortable: false,
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
              style={{ lineHeight: "1.8", paddingBottom: "6px", borderBottom: index !== row.packs.length - 1 ? "1px solid #eee" : "none" }}
            >
              INR {Number(p.price).toFixed(2)}
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              style={{ width: "24px", height: "24px", color: "#2e7d32" }}
          >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v6m0 0l-3-3m3 3l3-3m-6-6h6"
              />
            </svg>
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
    formData.append("category", "HPLC Solvents");

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
    <>
      <section className="shop-area pt-120 pb-70">
        <div className="container">
          <div className="shop-left-right ml-130 mr-130">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="productthumb mb-40 wow fadeInRighLeft" data-wow-delay=".4s">
                  <img src="/assets/img/productdetails/LC-MS_solvent.svg" alt="product-thumb" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="product mb-40 ml-20 wow fadeInRighRight" data-wow-delay=".4s">
                  <div className="product__details-content mb-40">
                    <h5 className="product-dtitle mb-3 mb-lg-4">HPLC Solvents</h5>
                    <p className="pd-description">
                      HPLC (High-Performance Liquid Chromatography) solvents, also known as the mobile phase, are fundamental to the success of any HPLC analysis. Their purity, properties, and careful handling are fundamental to getting accurate, reliable, and reproducible results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Features */}
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
                          <p className="pd-feature-text">{renderFeatureText(feature)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
    </>
  );
};

export default HplcArea;
