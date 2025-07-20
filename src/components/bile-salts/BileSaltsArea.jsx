"use client";
import React, { useState, useEffect } from "react";
import DataTable from "../../common/DataTable";

const BileSaltsArea = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  const features = [
    // You can add specific features here if needed, or leave empty if not provided
  ];

  const columns = [
    {
      name: "Product Code",
      selector: (row) => row.ProductCode,
      sortable: false,
      grow: 1,
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
    formData.append("category", "Bile Salts & SLS");

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
                  <h5 className="product-dtitle mb-3 mb-lg-4">BILE SALTS</h5>
                  <p className="pd-description">
                    Conjugated bile salts are not just vital for the human body;
                    their physiologically important acid-base properties also
                    make them indispensable ingredients in various scientific
                    and pharmaceutical applications. Notably, they are widely
                    utilized in microbiological culture media for critical
                    processes such as the dissolution testing of drugs.
                    <br />
                    <br />
                    Bile salts in dissolution testing for Bioequivalence studies
                    provides a critical physiological link, allowing for a more
                    accurate assessment of a drug's solubility, dissolution, and
                    potential absorption, particularly for challenging poorly
                    water-soluble compounds. This enhances the relevance and
                    reliability of the in vitro data for predicting in vivo
                    performance. Beyond drug testing, conjugated bile salts find
                    use in a range of other biological applications.
                    <br />
                    <br />
                    Dimer has successfully leveraged its expertise in chemical
                    synthesis to produce the following conjugated bile salts on
                    a kilogram (Kg) scale, demonstrating our robust capabilities
                    and commitment to supporting these vital research and
                    industrial needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          {features.length > 0 && (
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
          )}
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

export default BileSaltsArea;
