import service_data from "@/data/service";
import Link from "next/link";
import React from "react";

const Service = () => {
  return (
    <>
      <section className="services-area pt-120 pb-75">
        <div className="container">
          <div className="row align-items-end  mb-45">
            <div className="col-lg-5 col-md-12 col-12">
              <div className="tp-section">
                <span className="tp-section__sub-title left-line mb-20">
                  our Services
                </span>
                <h3 className="tp-section__title mb-30">Service Area</h3>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-12">
              <div className="services-link text-md-start text-lg-end mb-30">
                <span>
                  Well ensure you always get the best results:
                  <Link href="/contact">
                    Contact us<i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            {service_data.map((item) => (
              <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className={`services-item tp-services-item mb-50 ml-${item.ml} wow fadeInUp`}
                  data-wow-delay=".2s"
                >
                  <div
                    className={`services-item__icon ${item.color_icon} mb-30`}
                  >
                    <i className={item.icon}></i>
                  </div>
                  <div className="services-item__content">
                    <h5 className="services-item__tp-title mb-30">
                      <Link href="/services-details">{item.title}</Link>
                    </h5>
                    <p>{item.des}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
