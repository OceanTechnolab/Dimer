"use client";
import React, { useState, useEffect } from "react";
import DataTable from "../../common/DataTable";

const BileSaltsArea = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  const features = [
    "High-quality bile salts and sodium lauryl sulfate for research and analytical applications.",
    "Purity and consistency for reliable experimental results.",
    "Suitable for pharmaceutical, biochemical, and analytical uses.",
    "Available in various grades and pack sizes."
  ];

  const columns = [
    {
      name: "Code",
      selector: (row) => row.ProductCode,
      sortable: true,
    },
    {
      name: "Product Description",
      selector: (row) => row.product_name,
      sortable: true,
    },
    {
      name: "CAS No.",
      selector: (row) => row.CASNo,
      sortable: true,
    },
    {
      name: "Grade",
      selector: (row) => row.Grade,
      sortable: true,
    },
    {
      name: "Pack Size",
      selector: (row) => row.PackSize,
      sortable: true,
    },
    {
      name: "PDF",
      selector: (row) =>
        row.msds_url ? (
          <a
            href={row.msds_url}
            target="_blank"
            rel="noopener noreferrer"
            title="Download PDF"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
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
    formData.append("category", "Bile Salts & SLS");

    try {
      const response = await fetch(
        "https://dev.dimerscientific.com/get_category_products.php",
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

  return (
    <section className="shop-area pt-120 pb-70">
      <div className="container">
        <div className="shop-left-right ml-130 mr-130">
          <div className="row">
            {/* Left - Product Image */}
            <div className="col-lg-6 col-md-6">
              <div
                className="productthumb mb-40 wow fadeInRighLeft"
                data-wow-delay=".4s"
              >
                <img
                  src="/assets/img/productdetails/gchc.png"
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
                  <h5 className="product-dtitle mb-30">BILE SALTS & SLS</h5>
                  <p className="pd-description">
                    Our bile salts and sodium lauryl sulfate (SLS) are produced to the highest standards for use in research, pharmaceuticals, and analytical applications. They offer high purity and consistency for reliable results.
                  </p>

                  <div className="row">
                    {features.map((feature, index) => (
                      <div key={index} className="col-sm-6 mb-3">
                        <div className="pd-arrow-point">
                          <span className="pd-arrow-icon">➤</span>
                          <p className="pd-arrow-text">{feature}</p>
                        </div>
                      </div>
                    ))}
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
              {loading ? (
                <p className="text-center">Loading products...</p>
              ) : (
                <DataTable columns={columns} data={productData} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BileSaltsArea; 