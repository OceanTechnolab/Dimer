"use client";
import React, { useState } from "react";
import axios from "axios";

function Certificate() {
  const [sapCode, setSapCode] = useState("");
  const [batchNumber, setBatchNumber] = useState("");
  const [pdfUrl, setPdfUrl] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!sapCode || !batchNumber) {
      setError("Please enter both SAP code and Batch number.");
      setPdfUrl(null);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("sap_code", sapCode);
      formData.append("batch_number", batchNumber);

      const response = await axios.post("http://localhost/hasmukh/search.php", formData);

      if (response.data.status === "success") {
        setPdfUrl(`http://localhost/hasmukh/${response.data.pdf_url}`);
        setError("");
      } else {
        setError(response.data.message || "PDF not found.");
        setPdfUrl(null);
      }
    } catch (err) {
      console.error(err);
      setError("Server error. Check PHP or XAMPP.");
      setPdfUrl(null);
    }
  };

  return (
    <div className="text-center mt-20">
      <h2 className="text-3xl font-bold mb-4">Certificate of Analysis</h2>
      <p className="mb-4">Enter SAP Code and Batch Number to fetch the PDF</p>

      <input
        type="text"
        placeholder="SAP Code (e.g., 1001001)"
        value={sapCode}
        onChange={(e) => setSapCode(e.target.value)}
        className="border px-4 py-2 m-2 rounded"
      />
      <input
        type="text"
        placeholder="Batch Number (e.g., #AB1235)"
        value={batchNumber}
        onChange={(e) => setBatchNumber(e.target.value)}
        className="border px-4 py-2 m-2 rounded"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-6 py-2 rounded"
      >
        🔍 Search
      </button>

      {error && <p className="text-red-600 mt-4">{error}</p>}

      {pdfUrl && (
        <div className="mt-4">
          <p className="text-green-600">✅ PDF Found:</p>
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            📄 Open PDF
          </a>
        </div>
      )}
    </div>
  );
}

export default Certificate;
