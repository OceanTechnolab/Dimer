import React from "react";
import Link from "next/link";

// slider_content
const slider_content = [
  {
    id: 1,
    icon: "fa-solid fa-award",
    title: "Improved product quality",
    des: "Delivering superior, consistent quality that meets industry standards and exceeds client expectations.",
    color_icon: "",
    color: "",
  },
  {
    id: 2,
   icon: "fa-solid fa-gauge-high",
    title: "process efficiency",
    des: "Streamlined operations and optimized workflows reduce waste and increase productivity across the board.",
    color_icon: "pink-icon",
    color: "pink-hexa",
  },
  {
    id: 3,
    icon: "fa-solid fa-scale-balanced",
    title: "Competitive pricing",
    des: "offering Cost-effective solutions that deliver high value without compromising quality.",
    color_icon: "green-icon",
    color: "green-hexa",
  },
  {
    id: 4,
    icon: "fa-duotone fa-timeline",
    title: "Faster project timelines",
    des: "Accelerated delivery schedules help bring your products to market quicker, giving you a competitive edge.",
    color_icon: "sky-icon",
    color: "sky-hexa",
  },
];

  
function Gridarea() {
  return (
    <>
      <section
        className="services-area pt-80 pb-50 grey-bg mt-60 fix bg-shape-01"
        style={{ backgroundImage: `url(/assets/img/shape/shape-bg-01.png)` }}
      >
        <div className="container">
          <div className="row align-items-center mb-50">
            <div className="col-lg-8 col-md-8 col-12">  
              <div className="tp-section">
                <h3 className="tp-section__title"> Our Manufacturing Capabilities</h3>
              </div>
            </div>
          </div>

          <div className="row">
            {slider_content.map((item) => (
              <div className="col-xl-3 col-lg-4 col-md-6 mb-40" key={item.id}>
                <div className="services-item">
                  <div className={`services-item__icon ${item.color_icon} mb-30`}>
                    <i className={item.icon}></i>
                  </div>
                  <div className="services-item__content">
                    <h4 className="services-item__tp-title mb-30">
                      {item.title}
                    </h4>
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
}

export default Gridarea;
