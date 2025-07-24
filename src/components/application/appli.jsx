import React from "react";

const industries = [
  {
    title: 'Pharmaceutical Industry',
    description:
      'We supply high-purity analytical reagents, HPLC solvents, and pharmaceutical impurities that support drug discovery, formulation, and regulatory testing.',
  },
  {
    title: 'Agriculture & Agrochemicals',
    description:
      'Our specialty chemicals aid in crop protection R&D, fertilizer development, and agro-biotech experiments.',
  },
  {
    title: 'Research & Analytical Labs',
    description:
      'Dimer provides over 25,000 research-grade chemicals tailored for chromatography, spectroscopy, and lab-scale synthesis.',
  },
  {
    title: 'Petrochemical & Refineries',
    description:
      'Solvents and catalysts engineered for refining processes, analytical control, and feedstock testing.',
  },
];

const ApplicationPage = () => {
  return (
    <>
      {/* 1. Page Header Section */}
                  <section className="application-hero bg-light py-16 text-center">
                    <h1 className="text-4xl font-bold mb-4">Applications of Our Fine & Specialty Chemicals</h1>
                    <p className="text-lg max-w-3xl mx-auto">
                      From research labs to industrial reactors, discover how Dimer's chemicals empower innovation across industries.
                    </p>
                  </section>

                  <section className="industry-section">
                  <div className="industry-list">
                    {industries.map((item, index) => (
                      <div key={index} className="industry-row">
                        <div className="industry-img">
                          <img
                            src={`/assets/img/industries/industries${index + 1}.webp`}
                            alt={item.title}
                            loading="lazy"
                          />
                        </div>
                        <div className="industry-content">
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              {/* 4. Certificates & Quality Assurance */}
              <section className="certificates-section-m py-16 px-4 md:px-20 bg-gray-100">
                  <h2 className="text-3xl font-bold text-center mb-8">Certificates & Quality Assurance</h2>
                      <div className="certificates-list">
                        <div className="cert-item">
                          <img src="/assets/img/logos/3.webp" alt="Certified" />
                          <strong>GMP Certified 
                            <p>Ensures products are consistently produced and controlled according to quality standards.</p>
                          </strong>
                        </div>
                        <div className="cert-item">
                          <img src="/assets/img/logos/1.webp" alt="Batch Consistency" />
                          <strong>ISO 9001 Certified 
                            <p>Internationally recognized standard for managing quality across your processes.</p>
                          </strong>
                        </div>
                        <div className="cert-item">
                          <img src="/assets/img/logos/2.webp" alt="CoA MSDS" />
                          <strong>ISO 17034 Certified
                            <p>Applies specifically to organizations that produce reference materials (RMs or CRMs).</p>
                          </strong>
                        </div>
                      </div>
                  <div className="text-center mt-6">
                    <a href="/certificates" className="text-[#f27e01] font-medium underline">
                       View More Certifications
                    </a>
                  </div>
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
