"use client";
import React, { useState } from "react";
import axios from "axios";
 
function Certificate() {
  const [sapCode, setSapCode] = useState("");
  const [batchNumber, setBatchNumber] = useState("");
  const [pdfUrl, setPdfUrl] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
 
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
 
      const response = await axios.post(
        "http://localhost/hasmukh/search.php",
        formData
      );
 
      if (response.data.status === "success") {
        setPdfUrl(`http://localhost/hasmukh/${response.data.pdf_url}`);
        setIsLoading(false);
 
        setError("");
      } else {
        setError(response.data.message || "PDF not found.");
        console.log(response);
        setPdfUrl(null);
      }
    } catch (err) {
      console.error(err);
      setError("Server error. Check PHP or XAMPP.");
      setPdfUrl(null);
    } finally {
      setIsLoading(false);
    }
  };
 
  return (
    <div className="bg-light py-5">
      <div className="container">
        <h2 className="tp-section__title text-center mb-20">
          Certificate of Analysis
        </h2>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-6 col-sm-8">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                {/* Header */}
                <div className="text-center mb-4">
                  <p className="text-muted mb-0">
                    Enter SAP Code and Batch Number to fetch the PDF
                  </p>
                </div>
 
                {/* Form */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSearch();
                  }}
                >
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
                      className="form-control form-control-lg"
                      disabled={isLoading}
                    />
                  </div>
 
                  <div className="mb-4">
                    <label
                      htmlFor="batchNumber"
                      className="form-label fw-medium"
                    >
                      Batch Number
                    </label>
                    <input
                      id="batchNumber"
                      type="text"
                      placeholder="e.g., #AB1235"
                      value={batchNumber}
                      onChange={(e) => setBatchNumber(e.target.value)}
                      className="form-control form-control-lg"
                      disabled={isLoading}
                    />
                  </div>
 
                  <div className="d-grid mb-3">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
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
                  <div
                    className="alert alert-danger d-flex align-items-center"
                    role="alert"
                  >
                    <i className="bi bi-exclamation-triangle-fill me-2"></i>
                    <div>{error}</div>
                  </div>
                )}
 
                {/* Success Alert */}
                {pdfUrl && (
                  <div className="alert alert-success" role="alert">
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
                        className="btn btn-success"
                      >
                        <i className="bi bi-file-earmark-pdf me-2"></i>
                        Open Certificate PDF
                      </a>
                    </div>
                  </div>
                )}
 
                {/* Additional Info */}
                <div className="mt-4 pt-3 border-top">
                  <p className="text-muted small mb-1">
                    <i className="bi bi-info-circle me-1"></i>
                    Need help? Contact support if you can't find your
                    certificate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Certificate;
 
 