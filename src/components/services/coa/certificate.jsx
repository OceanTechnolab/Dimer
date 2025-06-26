"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Certificate() {
  const [sapCode, setSapCode] = useState("");
  const [batchNumber, setBatchNumber] = useState("");
  const [pdfUrl, setPdfUrl] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [animateCard, setAnimateCard] = useState(false);

  useEffect(() => {
    setAnimateCard(true);
  }, []);

  const handleSearch = async () => {
    if (!sapCode.trim()) {
      setError("Please enter a Product Code");
      setPdfUrl(null);
      return;
    }

    if (!batchNumber.trim()) {
      setError("Please enter a Batch Number");
      setPdfUrl(null);
      return;
    }

    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("sap_code", sapCode);
      formData.append("batch_number", batchNumber);

      // Replace hard-coded API endpoint with an environment variable
      const apiEndpoint = process.env.REACT_APP_API_ENDPOINT || "http://localhost/hasmukh";

      const response = await axios.post(
        `${apiEndpoint}/search.php`,
        formData
      );

      if (response.data.status === "success") {
        setPdfUrl(`${apiEndpoint}/${response.data.pdf_url}`);
        setError("");
      } else {
        setError(response.data.message || "PDF not found.");
        setPdfUrl(null);
      }
    } catch (err) {
      console.error("Error occurred during search:", err.message);
      setError("An unexpected error occurred. Please try again later.");
      setPdfUrl(null);
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
        className={`container p-4 p-md-5 rounded-4 shadow-lg border border-4 position-relative ${
          animateCard ? "fade-in" : ""
        }`}
        style={{
          maxWidth: "800px",
          backgroundColor: "#fff",
          borderColor: "#d4af37",
          overflow: "hidden",
        }}
      >
        {/* Optional Seal */}
        <div style={{ position: "absolute", top: 20, right: 20, zIndex: 2 }}>
          <img
            src="/images/seal.png"
            alt="Seal"
            style={{ height: "80px", width: "80px" }}
          />
        </div>

        {/* Optional Watermark */}
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "10px",
            opacity: 0.03,
            zIndex: 0,
          }}
        >
          <img
            src="/images/molecule-watermark.png"
            alt="Watermark"
            width="300"
          />
        </div>

        {/* Header */}
        <div style={{ zIndex: 2, position: "relative" }}>
          <h2
            className="text-center fw-bold mb-3"
            style={{ fontFamily: "Georgia, serif", color: "#2c3e50" }}
          >
            Certificate of Analysis
          </h2>
          <p className="text-center text-muted fst-italic mb-4">
            Please enter the product details to find your certificate.
          </p>

          {/* Sample Formula */}
          <p className="text-center text-muted small mb-4">
            <em>C₈H₉NO₂ + H₂O → Medical Base Compound</em>
          </p>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
          >
     

            <div className="mb-4">
              <label htmlFor="batchNumber" className="form-label fw-medium">
                Batch Number
              </label>
              <input
                id="batchNumber"
                type="text"
                placeholder="e.g., #AB1235"
                value={batchNumber}
                onChange={(e) => setBatchNumber(e.target.value)}
                className="form-control form-control-lg border-2 rounded-3"
                disabled={isLoading}
              />
            </div>

                   <div className="mb-3">
              <label htmlFor="sapCode" className="form-label fw-medium">
                Product Code
              </label>
              <input
                id="sapCode"
                type="text"
                placeholder="e.g., 1001001"
                value={sapCode}
                onChange={(e) => setSapCode(e.target.value)}
                className="form-control form-control-lg border-2 rounded-3"
                disabled={isLoading}
              />
            </div>

            <div className="d-grid mb-3">
              <button
                type="submit"
                className="btn btn-dark btn-lg rounded-3 btn-hover-scale"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Searching...
                  </>
                ) : (
                  <>
                    <i className="bi bi-search me-2"></i>
                    Search Certificate
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Error Alert */}
          {error && (
            <div className="alert alert-danger d-flex align-items-center mt-3 fade-in">
              <i className="bi bi-exclamation-triangle-fill me-2"></i>
              <div>{error}</div>
            </div>
          )}

          {/* Success Alert */}
          {pdfUrl && (
            <div className="alert alert-success mt-3 fade-in">
              <div className="d-flex align-items-center mb-2">
                <i className="bi bi-check-circle-fill me-2"></i>
                <strong>Certificate Found Successfully!</strong>
              </div>
              <p className="mb-2 small">
                Your certificate is ready for download.
              </p>
              <div className="d-grid">
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success bounce-in btn-hover-scale"
                >
                  <i className="bi bi-file-earmark-pdf me-2"></i>
                  Open Certificate PDF
                </a>
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
