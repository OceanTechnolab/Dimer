"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Certificate() {
  const [productCode, setProductCode] = useState("");
  const [batchNo, setBatchNo] = useState("");
  const [coaList, setCoaList] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [animateCard, setAnimateCard] = useState(false);

  useEffect(() => {
    setAnimateCard(true);
  }, []);

  const handleSearch = async () => {
    if (!productCode.trim() || !batchNo.trim()) {
      setError("Both Product Code and Batch Number are required.");
      setCoaList([]);
      return;
    }

    setIsLoading(true);
    setError("");
    setCoaList([]);

    try {
      const formData = new FormData();
      formData.append("ProductCode", productCode.trim().toLowerCase());
      formData.append("BatchNo", batchNo.trim().toLowerCase());

    // Use .env API or fallback to Hostinger live URL
    // const apiEndpoint =
    // process.env.NEXT_PUBLIC_API_ENDPOINT ||"https://dev.dimerscientific.com/dimer_api/";
    const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT || "https://dev.dimerscientific.com/dimer_api";

    const response = await axios.post(`${apiEndpoint}/search.php`, formData);


      if (response.data.status === "success" && Array.isArray(response.data.data) && response.data.data.length > 0) {
        setCoaList(response.data.data);
      } else {
        setError(response.data.message || "No matching COA found.");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("An error occurred while fetching the COA.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        background: "linear-gradient(to right, #fef6e4, #f9ece3)",
        backgroundImage: `url('/images/science-formulas-bg.png')`,
        backgroundRepeat: "repeat",
        backgroundSize: "contain",
        backgroundAttachment: "fixed",
        padding: "40px",
      }}
    >
      <div
        className={`container p-4 p-md-5 rounded-4 shadow-lg border border-4 position-relative ${animateCard ? "fade-in" : ""}`}
        style={{
          maxWidth: "900px",
          backgroundColor: "#fff",
          borderColor: "#d4af37",
          overflow: "hidden",
        }}
      >
        {/* Seal */}
        <div style={{ position: "absolute", top: 20, right: 20, zIndex: 2 }}>
          <img src="/images/seal.png" alt="Seal" style={{ height: "80px", width: "80px" }} />
        </div>

        {/* Watermark */}
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "10px",
            opacity: 0.03,
            zIndex: 0,
          }}
        >
          <img src="/images/molecule-watermark.png" alt="Watermark" width="300" />
        </div>

        <div style={{ zIndex: 2, position: "relative" }}>
          <h2 className="text-center fw-bold mb-3" style={{ fontFamily: "Georgia, serif", color: "#2c3e50" }}>
            Certificate of Analysis
          </h2>
          <p className="text-center text-muted fst-italic mb-4">
            Please enter the product details to find your certificate.
          </p>

          <p className="text-center text-muted small mb-4">
            <em>C₈H₉NO₂ + Batch → Quality Verified Output</em>
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
          >
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="batchNo" className="form-label fw-medium">Batch Number</label>
                <input
                  id="batchNo"
                  type="text"
                  placeholder="e.g., F25D430"
                  value={batchNo}
                  onChange={(e) => setBatchNo(e.target.value)}
                  className="form-control form-control-lg border-2 rounded-3"
                  disabled={isLoading}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="productCode" className="form-label fw-medium">Product Code</label>
                <input
                  id="productCode"
                  type="text"
                  placeholder="e.g., 1001001"
                  value={productCode}
                  onChange={(e) => setProductCode(e.target.value)}
                  className="form-control form-control-lg border-2 rounded-3"
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="d-grid mb-4">
              <button
                type="submit"
                className="btn btn-dark btn-lg rounded-3 btn-hover-scale"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Searching...
                  </>
                ) : (
                  <>
                    <i className="bi bi-search me-2"></i>
                    Search COA
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Error Alert */}
          {error && (
            <div className="alert alert-danger d-flex align-items-center fade-in">
              <i className="bi bi-exclamation-triangle-fill me-2"></i>
              <div>{error}</div>
            </div>
          )}

          {/* Results */}
          {coaList.length > 0 && (
            <div className="fade-in mt-4">
              {/* Display once */}
              <div className="alert alert-success d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                <div>
                  <strong>Batch Number:</strong> {coaList[0]?.BatchNo || batchNo}
                </div>
                <div>
                  <strong>Product Code:</strong> {coaList[0]?.ProductCode || productCode}
                </div>
              </div>

              {/* List of PDFs */}
              <div className="list-group">
                {coaList.map((item, index) => (
                  <a
                    key={index}
                    href={item.COAurl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                  >
                    <span>
                      <i className="bi bi-file-earmark-pdf me-2 text-danger"></i>
                      Certificate {index + 1}
                    </span>
                    <span className="badge bg-primary rounded-pill">Download</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="mt-4 pt-3 border-top">
            <p className="text-muted small mb-1">
              <i className="bi bi-info-circle me-1"></i>
              Need help? Contact support if you can't find your certificate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
