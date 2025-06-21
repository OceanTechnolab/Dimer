import React from "react";

const AppointForm = () => {
  return (
    <form onSubmit={e => e.preventDefault()}>
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
            <input type="text" placeholder="mm / dd / yyyy" />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="visitor-form__input">
            <textarea placeholder="Type your massage" name="message"></textarea>
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
  );
};

export default AppointForm;
