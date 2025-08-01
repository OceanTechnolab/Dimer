"use client";
import React, { useState, useEffect } from "react";
import DataTable from "../../common/DataTable";

const Biological = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  const features = [
    "Trustworthy for leftover solvent checks: Every lot is pre-checked, so it finds residual solvents in drug components precisely, without getting in the way.",
    "Super Clean: Produced by special distillation, they contain hardly any unwanted substances, leading to more precise tests.",
    "Easy-to-Read Data: They generate neat charts with steady backgrounds, simplifying the process of finding and measuring compounds.",
    "Improved Accuracy: Minimal water and excellent UV transparency lead to more exact and trustworthy analytical outcomes.",
    "Easy-to-Read Data: They generate neat charts with steady backgrounds, simplifying the process of finding and measuring compounds.",
    "Improved Accuracy: Minimal water and excellent UV transparency lead to more exact and trustworthy analytical outcomes.",
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
                borderBottom: index !== row.packs.length - 1 ? "1px solid #eee" : "none",
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
                borderBottom: index !== row.packs.length - 1 ? "1px solid #eee" : "none",
              }}
            >
              {/* INR {Number(p.price).toFixed(2).replace(/\.00$/, "")} */}
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
    formData.append("category", "GC-HS Solvents");

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
    <section className="shop-area pt-80 pb-70">
      <div className="container">
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
      </div>
    </section>
  );
};

export default Biological;
