import Count from "@/common/count";
import Team from "@/common/team";
import Link from "next/link";
import React from "react";

const AboutArea = () => {
  return (
    <>
     <section className="description-area py-70">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-10">
        <h3 className="about-heading1">
          Dimer Scientific – Advancing Chemistry with Innovation and Integrity
        </h3>
         <div className="tp-about__info-list ">
                  <ul>
                    <li>
                      <i className="fa-solid fa-star"></i>Over 10 years of R&D expertise in synthesis and development using innovative chemistry.
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>12,000+ products across different chemical segments.
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>Advanced manufacturing facilities and trusted channel partners.
                      euismod
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>Quick logistics and ready stock for fast service delivery.
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>Serving pharma, agriculture, petrochemical, research, paint, plastic, and other industries.
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>Continuous innovation and SOP upgrades to create important new compounds.
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>Commitment to ethical business, customer respect, and long-term relationships.
                    </li>
                  </ul>
                </div>
                <div Read-more-button>
                  <button onClick={/Team 01/}>Read More...</button>
                </div>
                 <div className="about-image">
                  <img src="/images/about-right.png" alt="About Us" />
                 </div>
                </div>
              </div>
             </div>
            </section>
              <section className="about-area pt-130 pb-70">
                 <div className="container">
                  <div className="row">
                     <div className="col-xl-6 col-lg-4 col-12">
                     <div
                className="tp-about-thumb mb-60 wow fadeInLeft"
                data-wow-delay=".3s"
              >
                <div className="tp-ab-img d-flex">
                  <div className="tp-ab-main-img p-relative">
                    <img
                      src="/assets/img/about/about-bg-04.jpg"
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
                      src="/assets/img/about/our-mission.png"
                      alt="about-shape"
                    />
                    <img
                      className="ab-shape-two"
                      src="/assets/img/about/about-bg-06.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8 col-12">
              <div
                className="about-content about-align mb-60 wow fadeInRight"
                data-wow-delay=".3s"
              >
                <div className="tp-section">
                  <h3 className="tp-section__title ab-title mb-25">
                    We’ll Ensure You Alwasy Get Best Results.
                  </h3>
                  <a className="tp-section__link" href="#">
                    Read our MIssion & Vission{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                  <p className=" mr-20 mb-40">
                    Exerci tation ullamcorper suscipit lobortis nisl aliquip ex
                    ea commodo claritatem insitamconse quat.Exerci tation
                    ullamcorper suscipit loborti excommodo habent claritatem
                    insitamconse quat.Exerci tationlobortis nisl aliquip ex ea
                    commodo habent claritatem insitamconse quat.
                  </p>
                </div>
                <div className="tp-about__info-list ab-check-list mb-55">
                  <ul>
                    <li>
                      <i className="fa-solid fa-check"></i>Extramural Funding
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Bacteria Markers
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Nam nec mi euismod
                      euismod
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>In aliquet dui nec
                      lectus
                    </li>
                  </ul>
                </div>
                <div className="about-content__btn">
                  <Link href="/about" className="tp-btn">
                    About us
                  </Link>
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
