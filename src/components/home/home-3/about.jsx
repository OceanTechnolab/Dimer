import Count from "@/common/count";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <>
      <section className="about-area tp-common-area pt-130 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-12">
              <div
                className="tp-about__content mb-50 wow fadeInLeft"
                data-wow-delay=".3s"
              >
                <div className="tp-section">
                  <span className="tp-section__sub-title left-line mb-25">
                    About Us
                  </span>
                  <h3 className="tp-section__title about-title mb-30">
                    We’ll Ensure You Always <br /> Get Best Results.
                  </h3>
                  <a className="tp-section__link" href="#">
                    Read our MIssion & Vission{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                  <p className=" mr-20 mb-45">
                    Exerci tation ullamcorper suscipit lobortis nisl aliquip ex
                    ea commodo claritatem insitamconse quat.Exerci tation
                    ullamcorper suscipit loborti excommodo habent claritatem
                    insitamconse quat.Exerci tationlobortis nisl aliquip ex ea
                    commodo habent claritatem insitamconse quat.
                  </p>
                </div>
                <div className="tp-about__info-list mb-55">
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
                <div className="tp-about__btn">
                  <Link className="tp-btn" href="/about">
                    About us
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-12">
              <div
                className="tp-about-thumb tp-3-thumb mb-60 wow fadeInRight"
                data-wow-delay=".3s"
              >
                <div className="tp-ab-img">
                  <div className="tp-ab-main-img p-relative">
                    <img
                      src="/assets/img/about/about-bg-07.jpg"
                      alt="about-thumb"
                    />
                    <div className="about__exprience tp-ab-counter ab-count">
                      <h3 className="counter">
                        <Count add_style={true} number={12} />
                      </h3>
                      <i>
                        Years of <br />
                        Experience
                      </i>
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

export default About;
