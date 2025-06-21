import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


// slider setting 
const setting = {
  // Optional parameters
  slidesPerView: 5,
  spaceBetween: 30,
  freeMode: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: true,
  },
  breakpoints: {
    1400: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".team-n",
    prevEl: ".team-p",
  },
};

// brands_img; 
 const brands_img = [
   { img: "/assets/img/brand/brand-01.png" },
   { img: "/assets/img/brand/brand-02.png" },
   { img: "/assets/img/brand/brand-03.png" },
   { img: "/assets/img/brand/brand-04.png" },
   { img: "/assets/img/brand/brand-05.png" },
   { img: "/assets/img/brand/brand-04.png" },
];
 
const Brands = ({ style_2 = false, border_style = false }) => {
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);
  return (
    <>
      <div
        className={`brand-area ${
          style_2
            ? "tp-common-area grey-bg pb-120"
            : border_style
            ? "pt-170 pb-120"
            : "pt-130 pb-130"
        } `}
      >
        <div className="container">
          <div className={`${border_style ? "brand-border pt-60 pb-60" : ""}`}>
            <Swiper
              {...setting}
              loop={isLoop}
              modules={Navigation}
              className="swiper-container brand-active"
            >
              {brands_img.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="swiper-wrapper brand-items">
                    <div className="swiper-slide">
                      <Link href="/">
                        <img src={item.img} alt="brand" />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
