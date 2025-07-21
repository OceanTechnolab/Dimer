import React from "react";

const ApplicationPage = () => {
  return (
    <>
      {/* 1. Page Header Section */}
      <section className="application-hero bg-light py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Applications of Our Fine & Specialty Chemicals</h1>
        <p className="text-lg max-w-3xl mx-auto">
          From research labs to industrial reactors, discover how Dimer's chemicals empower innovation across industries.
        </p>
        <div className="mt-8">
          <img src="/assets/img/industries/hero-industries.webp" alt="Industries Banner" className="w-full rounded-xl" />
        </div>
      </section>

      {/* 2. Industry-Specific Application Sections with Image Left and Content Right */}
      <section className="industry-wrapper flex flex-col md:flex-row items-center gap-10 py-16 px-4 md:px-20">
        <div className="md:w-1/2">
          <img src="/assets/img/industries/industry-overview.jpg" alt="Industry Overview" className="w-full rounded-xl" />
        </div>
        <div className="industry-sections md:w-1/2 grid gap-6">
          {[
            {
              title: "Pharmaceutical Industry",
              desc: "We supply high-purity analytical reagents, HPLC solvents, and pharmaceutical impurities that support drug discovery, formulation, and regulatory testing."
            },
            {
              title: "Agriculture & Agrochemicals",
              desc: "Our specialty chemicals aid in crop protection R&D, fertilizer development, and agro-biotech experiments."
            },
            {
              title: "Research & Analytical Labs",
              desc: "Dimer provides over 25,000 research-grade chemicals tailored for chromatography, spectroscopy, and lab-scale synthesis."
            },
            {
              title: "Petrochemical & Refineries",
              desc: "Solvents and catalysts engineered for refining processes, analytical control, and feedstock testing."
            },
          ].map(({ icon, title, desc }, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-2">{icon} {title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Certificates & Quality Assurance */}
      <section className="certificates-section py-16 px-4 md:px-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Certificates & Quality Assurance</h2>
        <ul className="list-disc list-inside max-w-2xl mx-auto text-lg space-y-2">
          <li>GMP, ISO 9001, ISO 17034 Certified</li>
          <li>Batch-to-batch consistency</li>
          <li>CoA & MSDS available for every product</li>
        </ul>
        <div className="text-center mt-6">
          <a href="/certifications" className="text-[#f27e01] font-medium underline">🔗 View Certifications</a>
        </div>
      </section>

      {/* 5. Inquiry Form */}
      <section className="inquiry-form bg-white py-16 px-4 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-8">Quick Quote / Technical Support</h2>
        <form className="max-w-xl mx-auto grid gap-4">
          <input type="text" placeholder="Name" className="border p-3 rounded-lg" required />
          <input type="email" placeholder="Email" className="border p-3 rounded-lg" required />
          <input type="text" placeholder="Organization" className="border p-3 rounded-lg" required />
          <select className="border p-3 rounded-lg" required>
            <option value="">Select Application Area</option>
            <option>Pharmaceutical</option>
            <option>Agriculture</option>
            <option>Research Labs</option>
            <option>Petrochemical</option>
            <option>Automotive</option>
            <option>Biotech</option>
            <option>Paints/Dyes</option>
          </select>
          <textarea placeholder="Message" className="border p-3 rounded-lg" rows="4" required></textarea>
          <button type="submit" className="bg-[#f27e01] text-white px-6 py-3 rounded-xl hover:bg-orange-600">📩 Submit Request</button>
        </form>
      </section>

      {/* 6. FAQs on Applications */}
      <section className="faqs py-16 px-4 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {[ 
            {
              q: "Can I request samples for pilot applications?",
              a: "Yes, we provide sample quantities for pilot projects upon request."
            },
            {
              q: "Are your products REACH or RoHS compliant?",
              a: "Many of our products comply with REACH and RoHS. Contact us for specific compliance certificates."
            },
            {
              q: "Do you support technical onboarding for new customers?",
              a: "Absolutely. Our technical team offers onboarding support and documentation to new partners."
            }
          ].map(({ q, a }, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow">
              <details>
                <summary className="font-semibold cursor-pointer">{q}</summary>
                <p className="mt-2 text-gray-700">{a}</p>
              </details>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ApplicationPage;
