"use client";
import React, { useState, useEffect } from "react";
import DataTable from "../../common/DataTable";

const HplcArea = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  const features = [
    "High purity solvents for HPLC applications, ensuring reliable and reproducible results.",
    "Low UV absorbance and minimal impurities.",
    "Filtered and tested for gradient and isocratic HPLC methods.",
    "Consistent quality for analytical and preparative chromatography."
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
    formData.append("category", "HPLC Solvents");

    try {
      const response = await fetch("https://api.dimerscientific.com/get_category_products.php", {
        method: "POST",
        body: formData,
      });

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
                <img src="/assets/img/productdetails/gchc.png" alt="product-thumb" />
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="product mb-40 ml-20 wow fadeInRighRight" data-wow-delay=".4s">
                <div className="product__details-content mb-40">
                  <h5 className="product-dtitle mb-3 mb-lg-4">HPLC Solvents</h5>
                  <p className="pd-description">
                    Our HPLC solvents are manufactured to the highest standards for use in high-performance liquid chromatography.
                    They are filtered and tested to ensure low UV absorbance and minimal impurities, supporting both analytical and preparative chromatography.
                  </p>
                </div>
              </div>
            </div>
          </div>

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

export default HplcArea;
