"use client";
import React, { useState, useEffect } from "react";
import DataTable from "../../common/DataTable";

const IonPairingArea = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  const features = [
    "Enhance Retention of Polar/Ionic Compounds: Allow separation of analytes that would otherwise elute too quickly in reversed-phase HPLC.",
    "Form Ion Pairs with Charged Analytes: Improve interaction with the non-polar stationary phase, leading to better separation.",
    "Versatile Reagent Types (Anionic/Cationic): Suitable for both acidic and basic compounds depending on their charge.",
    "Improve Peak Shape and Resolution: Yield sharper, more symmetrical peaks, reducing tailing and overlap.",
    "Extend the Use of Reversed Phase Columns: Eliminate the need for ion-exchange columns for ionic compounds.",
    "Compatible with Gradient Elution: Allow flexibility in method development and faster analysis times.",
    "Applicable Across Various Industries: Useful in pharmaceuticals, food testing, environmental analysis, and clinical research."
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
    formData.append("category", "Ion Pairing Reagents");

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
              <div className="productthumb mb-40 wow fadeInRighLeft" data-wow-delay=".4s">
                <img src="/assets/img/productdetails/GC-HS_solvent.svg" alt="product-thumb" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="product mb-40 ml-20 wow fadeInRighRight" data-wow-delay=".4s">
                <div className="product__details-content mb-40">
                  <h5 className="product-dtitle mb-3 mb-lg-4">Ion Pairing Reagents</h5>
                  <p className="pd-description">
                    Ion pairing reagents are chemicals used in analytical chemistry, especially in High-Performance Liquid Chromatography (HPLC), to improve the separation of ionic compounds. These reagents form neutral or less charged ion pairs with analytes, enhancing their retention on reverse-phase columns.
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

export default IonPairingArea; 