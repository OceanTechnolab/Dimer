import React from "react";

const Appointment = () => {
  return (
    <>
      <section
        className="appoinment-area grey-bg mb-50 tp-box-space ml-30 mr-30"
        style={{ backgroundImage: `url("/assets/img/shape/shape-bg-08.png")` }}
      >
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-4 col-lg-12 col-md-12">
              <div className="appoint-thumb">
                <img
                  src="/assets/img/banner/appoinment-02.png"
                  alt="appoinment-img"
                />
              </div>
            </div>
            <div className="col-xl-8 col-lg-12 col-md-12">
              <div className="visitor-info visitor-info-bg">
                <h4 className="appoinment-title mb-25">
                  <i className="fa-light fa-file-signature"></i>Book your visit
                </h4>
                <div className="visitor-form">
                  <form action="#">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="visitor-form__input">
                          <input type="text" placeholder="Your name" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="visitor-form__input">
                          <input type="email" placeholder="Your mail" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="visitor-form__input">
                          <input type="text" placeholder="Medical Research" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="visitor-form__input">
                          <input type="date" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="visitor-form__input">
                          <textarea
                            placeholder="Type your massage"
                            name="message"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-12">
                        <div className="visit-btn mt-20">
                          <button className="tp-btn">Book Now</button>
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-8 col-12">
                        <div className="visit-serial mt-45">
                          <span>
                            24/7 Emergency Service :
                            <a href="tel:+88978897">
                              +88 978 897 6545
                              <i className="fa-regular fa-arrow-right"></i>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Appointment;
