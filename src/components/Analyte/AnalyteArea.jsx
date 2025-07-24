"use client";
import React, { useState, useEffect } from "react";
import DataTable from "../../common/DataTable";

const AnalyteArea = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  const features = [
    "Accuracy & Reliability: Their high purity ensures precise and trustworthy results, free from interfering contaminants.",
    "Reproducibility: Consistent quality guarantees that experiments can be repeated with the same outcomes.",
    "Enhanced Sensitivity: Low impurities allow for detection of even trace amounts of substances.",
    "Regulatory Compliance: Essential for meeting industry standards and certifications.",
    "Cost-Effectiveness: Reduces failed experiments, re-tests, and instrument downtime in the long run. Prevents contamination and damage to sensitive analytical equipment.",
    "Broad Applicability: Indispensable across diverse scientific and industrial analyses. ",
  ];

  const columns = [
    {
      name: "Product Code",
      selector: (row) => row.ProductCode,
      sortable: false,
      grow: 2,
    },
    {
      name: "Product Description",
      selector: (row) => row.product_name,
      sortable: false,
      grow: 2,
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
              style={{
                lineHeight: "1.8",
                paddingBottom: "6px",
                borderBottom:
                  index !== row.packs.length - 1 ? "1px solid #eee" : "none",
              }}
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
                borderBottom:
                  index !== row.packs.length - 1 ? "1px solid #eee" : "none",
              }}
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
    formData.append("category", "GC-HS Solvents");

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
    <section className="shop-area pt-120 pb-70">
      <div className="container">
        <div className="shop-left-right ml-130 mr-130">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div
                className="productthumb mb-40 wow fadeInRighLeft"
                data-wow-delay=".4s"
              >
                <img
                  src="/assets/img/productdetails/GC-HS_solvent.svg"
                  alt="product-thumb"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div
                className="product mb-40 ml-20 wow fadeInRighRight"
                data-wow-delay=".4s"
              >
                <div className="product__details-content mb-40">
                  <h5 className="product-dtitle mb-3 mb-lg-4">
                    Analytical Solvents
                  </h5>
                  <p className="pd-description">
                    Analytical reagents are specialized chemical substances or
                    mixtures used in laboratories to perform accurate and
                    reliable chemical analyses. Their primary purpose is to
                    detect the presence or absence of a substance (qualitative
                    analysis) or to measure its concentration (quantitative
                    analysis). The defining characteristic of analytical
                    reagents is their high purity, which is essential to ensure
                    the precision and reliability of experimental results.
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

export default AnalyteArea;
