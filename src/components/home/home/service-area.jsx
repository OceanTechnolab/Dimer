import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Link from "next/link";

// slider setting
const setting = {
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".services-n",
    prevEl: ".services-p",
  },
};

// slider_content
const slider_content = [
  {
    id: 1,
    icon: "flaticon-hemoglobin-test-meter",
    title: "HEMOGLOBIN TEST",
    des: "Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam",
    color_icon: "",
    color: "",
  },
  {
    id: 2,
    icon: "flaticon-blood-test",
    title: "BLOOD TESTING",
    des: "Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam",
    color_icon: "pink-icon",
    color: "pink-hexa",
  },
  {
    id: 3,
    icon: "flaticon-biochemistry",
    title: "BIOCHEMISTRY",
    des: "Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam",
    color_icon: "green-icon",
    color: "green-hexa",
  },
  {
    id: 4,
    icon: "flaticon-dna-1",
    title: "HISTOPATOLOGY",
    des: "Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam",
    color_icon: "sky-icon",
    color: "sky-hexa",
  },
];

const ServiceArea = () => {
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);
  return (
    <>
      <section
        className="services-area pt-95 pb-90 grey-bg mt-60 fix"
        style={{ backgroundImage: `url(/assets/img/shape/shape-bg-01.png)` }}
      >
        <div className="container">
          <div className="row mb-125">
            <div className="col-lg-12">
              <div className="search-form">
                <form action="#">
                  <input type="text" placeholder="What are you looking for?" />
                  <button className="tp-btn search-btn" type="submit">
                    Search Here
                    <i className="fa-light fa-magnifying-glass ml-5"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-8 col-12">
              <div className="tp-section">
                <span className="tp-section__sub-title left-line mb-20">
                  our Services
                </span>
                <h3 className="tp-section__title mb-50">Service Area</h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="tp-services d-flex align-items-center">
                <div className="services-p">
                  <i className="fa-regular fa-arrow-left"></i>
                </div>
                <div className="services-n">
                  <i className="fa-regular fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="services-slider  wow fadeInUp" data-wow-delay=".3s">
            <div>
              <Swiper
                {...setting}
                loop={isLoop}
                modules={[Navigation]}
                className="service-active"
              >
                {slider_content.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="services-item mb-40">
                      <div
                        className={`services-item__icon ${item.color_icon} mb-30`}
                      >
                        <i className={`${item.icon}`}></i>
                      </div>
                      <div className="services-item__content">
                        <h4 className="services-item__tp-title mb-30">
                          <Link href="/services-details">{item.title}</Link>
                        </h4>
                        <p>{item.des}</p>
                        <div className="services-item__btn">
                          <Link
                            className={`btn-hexa ${item.color}`}
                            href="/services-01"
                          >
                            <i></i>Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceArea;
