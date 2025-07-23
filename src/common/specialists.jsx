import Link from "next/link";
import React from "react";


// choose data
const choose = [
  {
    id: 1,
    color: "",
    icon: "flaticon-microscope",
    title: (
      <>
        High Quality <br />
        & Consistency
      </>
    ),
    des: (
      <>
        All our chemicals are manufactured under strict SOPs and validated protocols ensuring batch-to-batch consistency.
      </>
    ),
  },
  {
    id: 2,
    color: "blue-icon",
    icon: "flaticon-thinking",
    title: (
      <>
        Efficient Development  <br />
      & Logistics
      </>
    ),
    des: (
      <>
        Ready stock availability, custom synthesis, and quick dispatch make us reliable partners for urgent R&D needs. 
      </>
    ),
  },
  {
    id: 3,
    color: "green-icon",
    icon: "flaticon-24-hours-1",
    title: (
      <>
        End-to-End Support
      </>
    ),
    des: (
      <>
        From COA, MSDS to customized reports—we support you from formulation to fulfillment.
      </>
    ),
  },
  {
    id: 4,
    color: "blue-icon",
    icon: "flaticon-team",
    title: (
      <>
        Trusted Expertise
      </>
    ),
    des: (
      <>
        Our dedicated R&D professionals and skilled workforce ensure every product meets scientific rigor and practical performance.
      </>
    ),
  },
];


const Specialists = () => {
  return (
    <>
      <section className="choose-area theme-bg pt-120 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-section text-center">
                <span className="tp-section__sub-title left-line right-line mb-25">
                  Our Specialists
                </span>
                <h3 className="tp-section__title title-white mb-85">
                  Why Choose Us
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            {choose.map((item) => (
              <div key={item.id} className="col-xl-3 col-md-6">
                <div
                  className="tp-choose__item ml-75 mb-100 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <div className={`tp-choose__icon ${item.color} mb-40`}>
                    <i className={item.icon}></i>
                  </div>
                  <div className="tp-choose__content">
                    <h4 className="tp-choose__title mb-20">{item.title}</h4>
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

export default Specialists;
