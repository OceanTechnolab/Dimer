import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import DataTable from "../../common/DataTable";

const SearchResult = () => {
  const router = useRouter();
  const { q } = router.query;
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState([]);
  const [coaData, setCoaData] = useState([]);

  useEffect(() => {
    if (q) {
      fetchResults(q);
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

  const productColumns = [
    { name: "Product Name", selector: (row) => row.product_name },
    { name: "CAS No", selector: (row) => row.CASNo },
    { name: "Product Code", selector: (row) => row.ProductCode },
  ];

  const coaColumns = [
    { name: "Product Code", selector: (row) => row.ProductCode },
    { name: "Batch No", selector: (row) => row.BatchNo },
    {
      name: "COA URL",
      selector: (row) =>
        row.COAurl ? (
          <a href={row.COAurl} target="_blank" rel="noopener noreferrer" title="Download COA">
            ⬇
          </a>
        ) : (
          "N/A"
        ),
    },
    { name: "Uploaded At", selector: (row) => row.uploaded_at },
  ];

  return (
    <div className="container py-5">
      <h2 className="mb-4">Search Results {q && `for "${q}"`}</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {productData.length > 0 && (
            <>
              <h4>Product Details</h4>
              <DataTable columns={productColumns} data={productData} />
            </>
          )}
          {coaData.length > 0 && (
            <>
              <h4 className="mt-4">COA Records</h4>
              <DataTable columns={coaColumns} data={coaData} />
            </>
          )}
          {productData.length === 0 && coaData.length === 0 && (
            <div className="alert alert-warning">No results found.</div>
          )}
        </>
      )}
    </div>
  );
};

export default SearchResult;
