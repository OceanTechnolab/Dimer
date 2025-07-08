import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <>
      <section
        className="breadcrumb__area pt-100 pb-120 breadcrumb__overlay"
        style={{
<<<<<<< HEAD
          backgroundImage: `url(/assets/img/banner/breadcrumb-01.jpg)`,  
=======
          backgroundImage: `url(/assets/img/banner/breadcrumb-background.png)`,
>>>>>>> 5e0b3eb200eacc315ddc54cd47bd5ab09b0e6d31
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-12 col-md-12 col-12">
              <div className="tp-breadcrumb">
                <h2 className="tp-breadcrumb__title">About us</h2>
              </div>
            </div>
            <div className="col-xl-5 col-lg-12 col-md-12 col-12">
              <div className="tp-breadcrumb__link text-xl-end">
                <span>
<<<<<<< HEAD
                  Dimer Scientific : 
                      <div className="breadcrumb">
                          <a href="/" className="breadcrumb-link">Home</a>
                                  <span className="breadcrumb-separator">›</span>
                                  <span className="breadcrumb-current">About Us</span>
                      </div>
=======
                  <a href="/">Home</a>/<li className="breadcrumb-item active" aria-current="page">About us</li>
>>>>>>> 5e0b3eb200eacc315ddc54cd47bd5ab09b0e6d31
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
