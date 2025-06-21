import ServiceOneData from "@/data/service-one-data";
import Link from "next/link";
import React from "react";

const ServiceArea = () => {
  return (
    <>
      <section
        className="services-area pt-120 pb-90 grey-bg"
        style={{ backgroundImage: `url(/assets/img/shape/shape-bg-01.png)` }}
      >
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="tp-section">
                <span className="tp-section__sub-title left-line right-line mb-20">
                  our Services
                </span>
                <h3 className="tp-section__title mb-70">Service Area</h3>
              </div>
            </div>
          </div>
          <div className="row">
            {ServiceOneData.map((item) => (
              <div key={item.id} className="col-xl-4 col-md-6">
                <div
                  className="services-item mb-40 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className={`services-item__icon ${item.color} mb-30`}>
                    <i className={item.icon}></i>
                  </div>
                  <div className="services-item__content">
                    <h4 className="services-item__tp-title tp-srv-title mb-30">
                      <Link href="/services-details">{item.title}</Link>
                    </h4>
                    <p>{item.des}</p>
                    <div className="services-item__btn">
                      <Link
                        className={`btn-hexa ${item.btn_color}`}
                        href="/service"
                      >
                        <i></i>Read More
                      </Link>
                    </div>
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

export default ServiceArea;
