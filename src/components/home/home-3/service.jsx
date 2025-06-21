import ServiceDataHomeThree from "@/data/service-data-home-3";
import Link from "next/link";
import React from "react";

const Service = () => {
  return (
    <>
      <section
        className="services-area tp-common-area pt-120 pb-130 grey-bg"
        style={{ backgroundImage: `url(/assets/img/shape/shape-bg-01.png)` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12 col-12">
              <div className="tp-section tp-section-center">
                <span className="tp-section__sub-title left-line mb-20">
                  our Services
                </span>
                <h3 className="tp-section__title mb-75">Service Area</h3>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-12">
              <div className="services-link tp-section-center">
                <span>
                  {`We'll`} ensure you always get the best results:
                  <Link href="/contact">
                    Contact us<i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            {ServiceDataHomeThree.map((item) => (
              <div
                key={item.id}
                className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-12"
              >
                <div
                  className={`services-thumb-box ${item.color} mb-30 wow fadeInUp`}
                  data-wow-delay=".6s"
                >
                  <div className="services-thumb-box__thumb fix">
                    <img src={item.img} alt="services-thumb" />
                  </div>
                  <div className="services-thumb-box__text-area d-flex align-items-center">
                    <div className="services-thumb-box__icon mr-20">
                      <i className={item.icon}></i>
                    </div>
                    <div className="services-thumb-box__content">
                      <h5 className="services-thumb-box__title">
                        <Link href="/services-details">{item.name}</Link>
                      </h5>
                      <Link className="tp-btn-link" href="/services-details">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="tp-services-btn text-center pt-30">
                <Link href="/services-details" className="tp-btn">
                  All Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
