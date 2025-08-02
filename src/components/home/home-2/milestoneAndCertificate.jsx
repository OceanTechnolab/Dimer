import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const certificates = [
  {
    id: 1,
    src: "/assets/img/certificates/certification-1.webp",
    title: "Complience Certificate",
  },
  {
    id: 2,
    src: "/assets/img/certificates/certification-2.webp",
    title: "Registration Certificate",
  },
  {
    id: 3,
    src: "/assets/img/certificates/certification-3.webp",
    title: "DBS Certificate",
  },
];

function MilestoneAndCertificate() {
  const [selectedId, setSelectedId] = useState(2); // initially highlight the middle one

  return (
    <div className="container py-5">
      <div className="text-center tp-section mb-80">
        <h2 className="tp-section__title mb-4">
         Certified Excellence
        </h2>
        <p
          className="lead mb-0 mx-auto"
          style={{ maxWidth: "700px", color: "#666", lineHeight: "1.6" }}
        >
          Commitment Proven through Recognized Standards
        </p>
      </div>
      <div className="row justify-content-center mt-20">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className={`col-md-4 d-flex flex-column align-items-center mb-4 certificate-container`}
            onClick={() => setSelectedId(cert.id)}
          >
            <img
              src={cert.src}
              alt={cert.title}
              className={`img-fluid certificate-img ${
                selectedId === cert.id ? "selected" : ""
              }`}
            />
            <div
              className={`certificate-title ${
                selectedId === cert.id ? "selected" : ""
              }`}
            >
              {cert.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MilestoneAndCertificate;
