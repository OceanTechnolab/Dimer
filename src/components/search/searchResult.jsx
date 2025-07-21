import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import DataTable from "../../common/DataTable";
import { FaSearch } from "react-icons/fa";

const SearchResult = () => {
  const router = useRouter();
  const { q } = router.query;
  const [loading, setLoading] = useState(false); // default false
  const [productData, setProductData] = useState([]);
  const [coaData, setCoaData] = useState([]);
  // Mobile search bar state
  const [mobileSearchValue, setMobileSearchValue] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [localQuery, setLocalQuery] = useState(""); // for mobile search only

  // Effect: fetch results for q (URL) or localQuery (mobile)
  useEffect(() => {
    // If localQuery is set, fetch for that (mobile search)
    if (localQuery) {
      setMobileSearchValue(localQuery); // keep input in sync
      fetchResults(localQuery);
    } else if (q) {
      setMobileSearchValue(q);
      fetchResults(q);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, localQuery]);

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
      } else {
        setProductData([]);
        setCoaData([]);
      }
    } catch (err) {
      setProductData([]);
      setCoaData([]);
      console.error("Search failed:", err);
    } finally {
      setLoading(false);
    }
  };

  const productColumns = [
    { name: "Product Name", selector: (row) => row.product_name, wrap: true },
    { name: "CAS No", selector: (row) => row.CASNo || "—" },
    { name: "Product Code", selector: (row) => row.ProductCode || "—" },
    { name: "Grade", selector: (row) => row.Grade || "—" },
    // { name: "Pack Size", selector: (row) => row.PackSize || "—" },
    { name: "HSN Code", selector: (row) => row.hsn_code || "—" },
    // { name: "GST", selector: (row) => row.gst || "—" },
    // { name: "Stock", selector: (row) => row.stock || "—" },
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
  center: true,
}

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
      {/* Mobile Search Bar (only visible on mobile) */}
      <form
        className="d-flex align-items-center flex-grow-1 mx-4 d-md-none mb-4"
        style={{ display: "flex" }}
        onSubmit={e => {
          e.preventDefault();
          if (mobileSearchValue.trim()) {
            setLocalQuery(mobileSearchValue.trim()); // set local state, do not push URL
          }
        }}
      >
        <div className={`search-container ${searchFocused ? "focused" : ""}`}> 
          <div className="search-input-wrapper">
            <input
              type="text"
              className={`search-input form-control ${searchFocused ? "focused" : ""}`}
              placeholder="Search product..."
              value={mobileSearchValue}
              onChange={e => setMobileSearchValue(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
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
      {/* Only show results if localQuery or q exists */}
      {(localQuery || q) ? (
        <>
          <h2 className="mb-4">
            Search Results {(localQuery || q) && `for \"${localQuery || q}\"`}
          </h2>
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
      ) : null}
    </div>
  );
};

export default SearchResult