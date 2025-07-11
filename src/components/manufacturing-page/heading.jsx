import React from "react";

const Heading = () => {
  return (
    <>
      <section className="info-area mb-50 pt-50 bg-manufacturing">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div data-wow-delay=".2s">
              <h2 className="heading">Manufacturing at Dimer Scientific</h2>
              <h5 className="subheading">Precision Chemistry. Engineered at Scale.</h5>
              <p className="description">
                We are offering contract research and manufacturing services in Laboratory chemicals 
                Research Chemicals for Pharmaceutical, Agrochemical, Nutraceutical, Specialty Chemicals 
                various other chemical Industries worldwide utilizing our rich experience in chemistry.
                Our customized services include R & D to Commercial-scale manufacturing  packaging for our
                catalog products as well as other new chemical derivatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-area pt-20 pb-20">
        <div className="container">
          <div className="row align-items-center">
            {/* LEFT: Text */}
            <div className="col-lg-6 col-md-12 mb-20">
              <div className="about-content wow fadeInRight" data-wow-delay=".3s">
                <h3 className="tp-section__title ab-title1 mb-25">
                  Dimer R&D team is focused on driving innovation and efficiency through
                </h3>
                <div className="tp-about1__info-list arrow mb-55">
                  <ul className="text-start mx-auto">
                    <li>
                      <i className="fas fa-arrow-right"></i> Cost reduction: Continuously exploring ways to minimize expenses without compromising quality.
                    </li>
                    <li>
                      <i className="fas fa-arrow-right"></i> New methods: Embracing innovative approaches to improve processes and outcomes.
                    </li>
                    <li>
                      <i className="fas fa-arrow-right"></i> Process simplification: Streamlining operations to enhance productivity and
                      <br /> reduce complexity.
                    </li>
                    <li>
                      <i className="fas fa-arrow-right"></i> Standardization: Implementing consistent protocols to ensure reliability and consistency.
                    </li>
                    <li>
                      <i className="fas fa-arrow-right"></i> Technology upgradation: Staying up-to-date with the latest advancements to enhance capabilities.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* RIGHT: Image */}
            <div className="col-lg-6 col-md-12 mb-20 px-4 px-lg-5 text-center">
              <div className="tp-about-thumb wow fadeInLeft" data-wow-delay=".3s">
                <div className="tp-ab-img">
                  <img
                    src="/assets/img/manufacturing/manufacturing.webp"
                    alt="slide-1-img1"
                    className="img-fluid mb-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Heading;
