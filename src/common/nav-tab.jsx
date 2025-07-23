import React from "react";


// progress_data
const progress_data = [
  {
    id: 1,
    icon: "flaticon-approval",
    img: "/assets/img/shape/navtabs-01.png",
    title: "Generate Proposal",
    des: (
      <>
        Share your requirement. We’ll prepare a custom solution that fits your needs.
      </>
    ),
  },
  {
    id: 2,
    icon: "flaticon-flask",
    img: "/assets/img/shape/navtabs-01.png",
    title: "Testing Begins",
    des: (
      <>
        Our lab begins production under strict quality control and SOPs.
      </>
    ),
  },
  {
    id: 3,
    icon: "flaticon-report",
    img: "",
    title: "Reports Delivered",
    des: (
      <>
        Get COA, MSDS, and technical documents along with your shipment.
      </>
    ),
  },
];

// tab_content
const tab_content = [
  {
    id: 1,
    tab_id: "profile-tab-pane",
    aria_labelledby: "profile-tab",
    header: (
      <>
        At Dimer Scientific, we aim to lead through energy,
         innovation, and trust,<br /> empowering researchers and 
         industries to explore new frontiers in chemistry.
      </>
    ),
    title: "Our Vision is Give You Always Best Results.",
    des_1: (
      <>
        We envision a future where every experiment is
        enabled, every formulation supported, and every
        challenge in fine & specialty chemicals is met
        with smart, scalable, and sustainable solutions.
      </>
    ),
    des_2: (
      <>
        Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo
        claritatem insitamconse quat.Exerci tation ullamcorper suscip
      </>
    ),
    images: [
      { order: "order-lg-1", img: "/assets/img/tab/Vision1.webp" },
      { order: "order-lg-3", img: "/assets/img/tab/tab-thumb-04.jpg" },
    ],
  },
  {
    id: 2,
    tab_id: "contact-tab-pane",
    aria_labelledby: "contact-tab",
    header: (
      <>
        At Dimer Scientific, our values guide every product we create and every partnership we build
      </>
    ),
    title: "We are Trusted by over 25000+ of customers",
    des_1: (
      <>
        At Dimer Scientific, our values aren’t just words — they shape the way we operate, 
        innovate, and support our partners. From the lab bench to your doorstep, these principles 
        guide our commitment to quality, reliability, and trust.
      </>
    ),
    des_2: (
      <>
        They remind us that behind every order is a person, a purpose, and a pursuit of something bigger.
      </>
    ),
    images: [
      { order: "order-lg-1", img: "/assets/img/tab/tab-values.webp" },
      { order: "order-lg-3", img: "/assets/img/tab/tab-thumb-02.jpg" },
    ],
  },
];
const NavTab = () => {
  return (
    <>
      <section className="nav-area tp-common-area pt-130 pb-80">
        <div className="container">
          <ul className="nav tp-nav-tavs mb-70" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="true"
                tabIndex="-1"
              >
                Our Mission
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
                tabIndex="-1"
              >
                Our Vision
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact-tab-pane"
                type="button"
                role="tab"
                aria-controls="contact-tab-pane"
                aria-selected="false"
                tabIndex="-1"
              >
                OUr Value
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <span className="nav-info d-flex justify-content-center text-center mb-75">
                Our mission is to enable discovery, accelerate innovation, and deliver reliable <br /> 
                solutions that help our customers bring their chemistry to life — with trust, care, and precision.
              </span>
              <div className="row">
                {progress_data.map((item) => (
                  <div key={item.id} className="col-xl-4 col-lg-4 col-md-6">
                    <div className="navtabs nav-primary p-relative text-center mb-40">
                      <div className="navtabs__icon mb-35">
                        <i className={item.icon}></i>
                      </div>
                      <div className="navtabs__content">
                        <h5 className="navtabs__title mb-25 mb-10">
                          {item.title}
                        </h5>
                        <p>{item.des}</p>
                      </div>
                      {item.img && (
                        <div className="navtabs__shape d-none d-lg-block">
                          <img src={item?.img} alt="shape" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {tab_content.map((item) => (
              <div
                key={item.id}
                className="tab-pane fade"
                id={`${item.tab_id}`}
                role="tabpanel"
                aria-labelledby={`${item.aria_labelledby}`}
              >
                <span className="nav-info d-flex justify-content-center text-center mb-75">
                  {item.header}
                </span>
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-12 order-lg-2">
                    <div className="nabmission mb-30">
                      <div className="nabmission__content text-center ml-50 mr-50 pt-20">
                        <h4 className="nabmission__title mb-35">
                          {item.title}
                        </h4>
                        <p className="mb-35">{item.des_1}</p>
                        <p>{item.des_2}</p>
                      </div>
                    </div>
                  </div>

                  {item.images.map((img, i) => (
                    <div
                      key={i}
                      className={`col-xl-3 col-lg-3 col-md-6 ${img.order}`}
                    >
                      <div className="nabthumb mb-30">
                        <img src={img.img} alt="tab-thumb" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NavTab;
