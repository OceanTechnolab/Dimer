import React from "react";

const Cta_Area = () => {
  return (
    <>
      <section className="cta-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="cta-bg theme-light-bg pt-65 pb-70"
                style={{
                  backgroundImage: `url("/assets/img/shape/shape-bg-03.png")`,
                }}
              >
                <div className="cta-content ml-90">
                  <h2 className="cta-title mb-35">
                    Looking for a best <br /> lebatory Service
                  </h2>
                  <a href="tel:+9159008855" className="tp-cta-btn">
                    <svg
                      width="14"
                      height="19"
                      viewBox="0 0 14 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2" cy="2" r="2" fill="white" />
                      <circle cx="7" cy="2" r="2" fill="white" />
                      <circle cx="12" cy="2" r="2" fill="white" />
                      <circle cx="12" cy="7" r="2" fill="white" />
                      <circle cx="12" cy="12" r="2" fill="white" />
                      <circle cx="7" cy="7" r="2" fill="white" />
                      <circle cx="7" cy="12" r="2" fill="white" />
                      <circle cx="7" cy="17" r="2" fill="white" />
                      <circle cx="2" cy="7" r="2" fill="white" />
                      <circle cx="2" cy="12" r="2" fill="white" />
                    </svg>
                    <span>Call :</span>+91 590 088 55
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta_Area;
