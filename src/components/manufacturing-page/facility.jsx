import React from "react";

const Facility = () => {
  const about_content = {
    about_img: "/assets/img/about/infrastructure.webp",
    //about_thumb: "/assets/img/about/custom.webp",
  };

  const { about_bg, about_img, about_thumb } = about_content;

  const infoBoxes = [
    {
      title: "Advanced Labs",
      desc: " Equipped with modern R&D and QC tools for synthesis, testing, and innovation.",
    },
    {
      title: "Certified Production",
      desc: "GMP, ISO 9001 & ISO 17034 approved units handling lab to commercial scale.",
    },
    {
      title: "Smart Packaging & Logistics",
      desc: "25,000+ SKUs in ready stock with fast, safe delivery.",
    },
    {
      title: "Custom Synthesis",
      desc: "Flexible pilot plants for client-specific formulations.",
    },
    {
      title: "Strict Quality & Safety",
      desc: "Complete compliance with safety, SOPs, and green chemistry standards.",
    },
  ];

  return (
    <section
      className="about-area  pt-80 pb-30"
      style={{
        backgroundImage: `url(${about_bg})`,
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left: Image */}
          <div className="col-xl-6 col-lg-12 col-12">
            <div className="about-thumb text-lg-center p-relative mb-60 wow fadeInLeft" data-wow-delay=".3s">
              <div className="facility-container">
                 <img src="/assets/img/about/infrastructure.webp" className="facility-image" alt="Facility" />
                  </div>
            </div>
          </div>

          {/* Right: Heading + Info Boxes */}
          <div className="col-xl-6 col-lg-12 col-12">
            <div className="about-content mb-60 wow fadeInRight" data-wow-delay=".3s">
              <h3 className="tp-section__title mb-45">Infrastructure & Facility Overview</h3>
              <h5 className="performace">At Dimer Scientific, our facilities are built for precision, performance, and scalability.</h5>

              <div className="row">
                {infoBoxes.map((item, idx) => (
                  <div className="col-md-6 mb-30" key={idx}>
                    <div className="info-box p-4 bg-white rounded shadow-sm hover-popup">
                      <h5 className="mb-2">{item.title}</h5>
                      <p className="mb-0 small">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facility;
