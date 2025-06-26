import Count from "@/common/count";
import Team from "@/common/team";
import Link from "next/link";
import React from "react";

const AboutArea = () => {
  return (
    <>
        <section className="about-area pt-130 pb-70">
                 <div className="container">
                  <div className="row">
                     <div className="col-xl-6 col-lg-8 col-12">
              <div
                className="about-content about-align mb-60 wow fadeInRight"
                data-wow-delay=".3s"
              >
                <div className="tp-section">
                  <h3 className="tp-section__title ab-title mb-25">
                    Trusted by Scientists, Powered by Innovation.
                  </h3>
                  <p className=" mr-20 mb-40">
                    Our extensive product range, expert team, and agile
                    logistics make us a preferred partner for research
                    institutions and global companies seeking reliable
                    and responsive chemical solutions.
                  </p>
                </div>
                <div className="tp-about__info-list ab-check-list mb-55">
                  <ul>
                    <li>
                      <i className="fa-solid fa-check"></i> Specialized in R&D, Analytical & Custom Synthesis
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Advanced Manufacturing Facilities with GMP & ISO certifications
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Serving 10+ Industries including pharma, agro, petrochemical
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Rapid Logistics & Ready Inventory for quick turnaround
                      lectus
                    </li>
                  </ul>
                </div>
                <div className="about-content__btn">
                  <Link href="/about" className="tp-btn">
                    About us
                  </Link>
                     <div className="col-xl-6 col-lg-4 col-12">
                     <div
                className="tp-about-thumb mb-60 wow fadeInLeft"
                data-wow-delay=".3s"
              >
                <div className="tp-ab-img d-flex">
                  <div className="tp-ab-main-img p-relative">
                    <img
                      src="/assets/img/about/about-us-3.png"
                      alt="about-thumb"
                    />
                    <div className="about__exprience tp-ab-counter">
                      <h3 className="counter">

                        <Count add_style={true} number={10} />
                      </h3>
                      <i>
                        Years of <br />
                        Experience
                      </i>
                    </div>
                  </div>
                  <div className="tp-ab-shape d-none d-md-block d-lg-none d-xl-block">
                    <img
                      className="ab-shape-one"
                      src="/assets/img/about/about-us-2.png"
            
                      alt="about-shape"
                      />
                    <img
                      className="ab-shape-two"
                      src="/assets/img/about/about-us-1.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
           
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
};

export default AboutArea;