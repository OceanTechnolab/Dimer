import service_three_data from "@/data/service-three-data";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// process data
const process_data = [
  {
    id: 1,
    icon: "flaticon-microscope",
    title: (
      <>
        High Quality <br /> Services
      </>
    ),
    des: (
      <>
        Nam eget dui vel quam sodales <br /> semper quis porttitor tortor.
      </>
    ),
  },
  {
    id: 2,
    icon: "flaticon-thinking",
    title: (
      <>
        Fast Working <br /> Process
      </>
    ),
    des: (
      <>
        Nam eget dui vel quam sodales <br /> semper quis porttitor tortor.
      </>
    ),
  },
  {
    id: 3,
    icon: "flaticon-24-hours-1",
    title: (
      <>
        24/7 Customer <br /> Support
      </>
    ),
    des: (
      <>
        Nam eget dui vel quam sodales <br /> semper quis porttitor tortor.
      </>
    ),
  },
  {
    id: 4,
    icon: "flaticon-team",
    title: (
      <>
        We have <br /> Expert Team
      </>
    ),
    des: (
      <>
        Nam eget dui vel quam sodales <br /> semper quis porttitor tortor.
      </>
    ),
  },
];

// process data
const setting = {
  // Optional parameters
  slidesPerView: 4,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 2,
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
};

const ProcessArea = () => {
  return (
    <>
      <section
        className="process-area process-bg"
        style={{ backgroundImage: `url(/assets/img/banner/process-bg-01.jpg)` }}
      >
        <Swiper {...setting} className="container-fluid p-0 process-active">
          {service_three_data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="swiper-slide">
                <div className="fea-box">
                  <div className="tp-process">
                    <div className="tp-process__icon mb-40">
                      <i className="flaticon-team"></i>
                    </div>
                    <div className="tp-process__content">
                      <h5 className="tp-process__title mb-20"> {item.title}</h5>
                      <p>{item.des}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default ProcessArea;
