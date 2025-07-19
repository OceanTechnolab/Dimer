import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import DataTable from "../../common/DataTable";
import { FaSearch } from "react-icons/fa";

const SearchResult = () => {
  const router = useRouter();
  const { q } = router.query;
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState([]);
  const [coaData, setCoaData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  // On mount and when q changes, set searchValue
  useEffect(() => {
    setSearchValue(q || "");
    if (q && q.trim()) {
      fetchResults(q);
    } else {
      setProductData([]);
      setCoaData([]);
      setLoading(false);
    }
  }, [q]);

  const fetchResults = async (query) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("search", query);

    try {
      const response = await fetch("https://api.dimerscientific.com/headersearch.php", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.status === "success") {
        setProductData(data.product_details || []);
        setCoaData(data.coas || []);
      }
    } catch (err) {
      console.error("Search failed:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchValue)}`);
    }
  };

  const productColumns = [
    { name: "Product Name", selector: (row) => row.product_name, wrap: true },
    { name: "CAS No", selector: (row) => row.CASNo || "—" },
    { name: "Product Code", selector: (row) => row.ProductCode || "—" },
    { name: "Grade", selector: (row) => row.Grade || "—" },
    { name: "Pack Size", selector: (row) => row.PackSize || "—" },
    { name: "HSN Code", selector: (row) => row.hsn_code || "—" },
    { name: "GST", selector: (row) => row.gst || "—" },
    { name: "Stock", selector: (row) => row.stock || "—" },
    {
      name: "MSDS",
      selector: (row) =>
        row.msds_url ? (
          <a
            href={row.msds_url}
            target="_blank"
            rel="noopener noreferrer"
            title="Download MSDS"
            style={{ color: "#1976d2", fontWeight: "bold" }}
          >
            PDF
          </a>
        ) : (
          "N/A"
        ),
      center: true,
    },
  ];

  const coaColumns = [
    { name: "Product Code", selector: (row) => row.ProductCode },
    { name: "Batch No", selector: (row) => row.BatchNo },
    {
      name: "COA URL",
      selector: (row) =>
        row.COAurl ? (
          <a
            href={row.COAurl}
            target="_blank"
            rel="noopener noreferrer"
            title="Download COA"
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
              style={{ width: "24px", height: "24px", color: "#1976d2" }}
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
    },
  ];

  return (
    <div className="container py-5">
      {/* Mobile-only search bar */}
        <form className="d-flex d-md-none align-items-center flex-grow-1 mx-4" onSubmit={handleSubmit}>
          <div className={`search-container `}>
            <div className="search-input-wrapper">
              <input
                type="text"
                className={`search-input form-control`}
                placeholder="Search product..."
               value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="category-button btn"
              aria-label="Search"
            >
              <FaSearch />
            </button>
          </div>
        </form>
      {/* Only show results if q is not empty */}
      {q && q.trim() && (
        <>
          <h2 className="mb-4">Search Results {q && `for "${q}"`}</h2>
          {loading ? (
            <div className="d-flex align-items-center">
              <strong>Loading...</strong>
              <div
                className="spinner-border text-primary ms-3"
                role="status"
                aria-hidden="true"
              ></div>
            </div>
          ) : (
            <>
              {productData.length > 0 && (
                <>
                  <h4 className="mb-3">Product Details</h4>
                  <DataTable
                    columns={productColumns}
                    data={productData}
                    striped
                    highlightOnHover
                    responsive
                    pagination
                    dense
                  />
                </>
              )}

              {coaData.length > 0 && (
                <>
                  <h4 className="mt-5 mb-3">COA Records</h4>
                  <DataTable
                    columns={coaColumns}
                    data={coaData}
                    striped
                    highlightOnHover
                    responsive
                    pagination
                    dense
                  />
                </>
              )}

              {productData.length === 0 && coaData.length === 0 && (
                <div className="alert alert-warning mt-4">No results found.</div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default SearchResult;
