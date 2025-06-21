import React from "react";

const DirectContactUs = () => {
  return (
    <>
      <section className="support-area grey-bg pt-125 pb-130">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="tp-section">
                <span className="tp-section__sub-title left-line right-line mb-20">
                  Get in touch
                </span>
                <h3 className="tp-section__title mb-70">Need Any Help</h3>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12 col-12">
              <div className="tp-support-form text-center">
                <span>Direct Contact with us</span>
                <form onSubmit={e => e.preventDefault()}>
                  <input type="text" placeholder="Enter your Name" />
                  <input type="text" placeholder="Enter your Mail" />
                  <textarea
                    name="massage"
                    placeholder="Type your massage"
                  ></textarea>
                </form>
                <div className="tp-support-form__btn">
                  <button className="tp-btn">Send Massage</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DirectContactUs;
