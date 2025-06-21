import AppointForm from "@/components/forms/appoint-form";
import React from "react";

const Appointment = () => {
  return (
    <>
      <section className="appoinment-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-6 col-xl-5 col-lg-12 col-md-12 p-0">
              <div className="appoinment-thumb">
                <img
                  src="/assets/img/banner/appoinment-01.jpg"
                  alt="appoinment-img"
                />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-7 col-lg-12 col-md-12 p-0">
              <div className="visitor-info">
                <h4 className="appoinment-title mb-25">
                  <i className="fa-light fa-file-signature"></i>Book your visit
                </h4>
                <div className="visitor-form">
                  {/* form start */}
                  <AppointForm />
                  {/* form end */}
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
