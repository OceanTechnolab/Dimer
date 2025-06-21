import { Progress } from "antd";
import React from "react";
import "react-circular-progressbar/dist/styles.css";

const Choose = () => {
  return (
    <>
      <section
        className="choose-area grey-bg pt-125 pb-70 tp-box-space ml-30 mr-30"
        style={{ backgroundImage: `url(/assets/img/shape/shape-bg-07.png)` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-section text-center">
                <span className="tp-section__sub-title left-line right-line mb-25">
                  who we are
                </span>
                <h3 className="tp-section__title mb-75">Why Choose Us</h3>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div
                className="experience-item text-center mb-50 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="progress-circular tl-progress">
                  <div
                    className="d-flex align-items-center justify-content-center"
                  >
                    
                    <Progress
                      type="circle"
                      percent={80}
                      width={165}
                      height={165}
                      strokeWidth={3.2}
                      style={{ fontSize: 33 }}
                    />
                   
                  </div>
                  
                </div>
                <span className="skill-item-title">MEDICAL RESEARCH</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div
                className="experience-item text-center mb-50 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="progress-circular tl-progress">
                  <Progress
                    type="circle"
                    percent={75}
                    width={165}
                    height={165}
                    strokeWidth={3.2}
                    strokeColor={"#F72A75"}
                    style={{ fontSize: 33 }}
                  />
                  
                </div>
                <span className="skill-item-title">BIOTECHNOLOGY</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div
                className="experience-item text-center mb-50 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="progress-circular tl-progress">
                  <Progress
                    type="circle"
                    percent={90}
                    width={165}
                    height={165}
                    strokeWidth={3.2}
                    strokeColor={"#42BFFF"}
                    style={{ fontSize: 33 }}
                  />
                  
                </div>
                <span className="skill-item-title">HISTOPATOLOGY</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div
                className="experience-item text-center mb-50 wow fadeInUp"
                data-wow-delay=".8s"
              >
                <div className="progress-circular tl-progress">
                  <Progress
                    type="circle"
                    percent={55}
                    width={165}
                    height={165}
                    strokeWidth={3.2}
                    strokeColor={"#10D0A1"}
                    fontSize={133}
                  />
                 
                </div>
                <span className="skill-item-title">ALLERGOLOGY</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Choose;
