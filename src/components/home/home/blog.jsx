import blog_data from "@/data/blog-data";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";


// slider setting 
const setting = {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
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
  // Navigation arrows
  navigation: {
    nextEl: ".tp-blog-n",
    prevEl: ".tp-blog-p",
  },
};
const Blog = () => {
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);

  return (
    <>
      <section className="blog-area pt-125 pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8 col-12">
              <div className="tp-section">
                <span className="tp-section__sub-title left-line mb-25">
                  Waht’s New
                </span>
                <h3 className="tp-section__title mb-65">Blog & Article</h3>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="tp-blog-arrow d-flex align-items-center">
                <div className="tp-blog-p">
                  <i className="fa-regular fa-arrow-left"></i>
                </div>
                <div className="tp-blog-n">
                  <i className="fa-regular fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
          <Swiper
            {...setting}
            loop={isLoop}
            modules={[Navigation]}
            className="swiper-container tp-blog-active wow fadeInUp"
            data-wow-delay=".3s"
          >
            {blog_data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="swiper-slide">
                  <div className="tp-blog mb-30">
                    <div className="tp-blog__thumb p-relative fix">
                      <a href="#">
                        <img src={item.img} alt="blog-item" />
                      </a>
                      <div className="tp-blog__date text-center">
                        <h4>{item.blog_date}</h4>
                      </div>
                    </div>
                    <div className="tp-blog__content">
                      <span className="tp-blog__category mb-30">
                        <Link href="/blog-details">{item.blog_category}</Link>
                      </span>
                      <h5 className="tp-blog__title mb-20">
                        <Link href="/blog-details">{item.blog_title}</Link>
                      </h5>
                      <p>{item.blog_des}</p>
                      <div className="tp-blog__btn">
                        <Link href="/blog">Read moRe</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Blog;
