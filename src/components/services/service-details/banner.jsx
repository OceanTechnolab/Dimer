import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <>
      <section
        className="breadcrumb__area pt-100 pb-120 breadcrumb__overlay"
        style={{
          backgroundImage: `url(/assets/img/banner/breadcrumb-background.png)`,
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-7 col-md-12 col-12">
              <div className="tp-breadcrumb">
                <h2 className="tp-breadcrumb__title">Services-Details</h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5 col-md-12 col-12">
              <div className="tp-breadcrumb__link serv-md d-flex">
                <span>
                  <a href="/">Home</a>/<li className="breadcrumb-item active" aria-current="page">service-details</li>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
