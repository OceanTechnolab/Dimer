import React from "react";
import Count from "./count";

//  counter_text;
const counter_text = [
  {
    id: 1,
    color: "blue-hard",
    counter: <h2>10+</h2>,
    text: "of R&D Excellence in Fine & Specialty Chemicals",
  },
  {
    id: 2,
    color: "pink-hard",
    counter: <h2>25,000+</h2>,
    text: "Research & Industrial Chemicals in Our Portfolio",
  },
  {
    id: 3,
    color: "sky-hard",
    counter: <h2>24-48 Hours</h2>,
    text: "Average Dispatch Time with Ready Stock & Quick Logistics",
  },
  {
    id: 4,
    color: "green-hard",
    counter: <h2> 12+ </h2>,
    text: "Industries Served Across Pharma, Agriculture, Petrochemicals, and More2 ",
  },
];

const Counter = ({ cls = "pt-40 pb-100"  }) => {
  return (
    <>
      <section className={`counter-area ${cls}`}>
        <div className="container">
          <div className="row">
            {counter_text.map((item) => (
              <div key={item.id} className="col-xl-3 col-md-6">
                <div
                  className="counter__item blue-border mb-30 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className={`counter__icon ${item.color} mb-15`}>
                    <i></i>
                  </div>
                  <div className="counter__content">
                    <h4 className="counter__title">
                      <span className="counter">
                        <Count  number={item.counter} />
                      </span>
                    </h4>
                    <p>{item.text}</p>
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

export default Counter;
