import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


// blog_content
const blog_content = [
  {
    id: 1,
    img: "/assets/img/blog/blog-thumb-04.jpg",
    title: "Coronavirus global health emergency",
    des: "Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla ...",
    date: "Dec 28, 2022",
    views: "1,526 views",
  },
  {
    id: 2,
    img: "/assets/img/blog/blog-thumb-05.jpg",
    title: "The Healthy Ageing 50 organ (Secound Part)",
    des: "Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla ...",
    date: "Dec 28, 2022",
    views: "1,526 views",
  },
  {
    id: 3,
    img: "/assets/img/blog/blog-thumb-06.jpg",
    title: "The Healthy Ageing 50 organ (First Part)",
    des: "Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla ...",
    date: "Dec 28, 2022",
    views: "1,526 views",
  },
];

// blog setting
const setting = {
  // loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
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
    nextEl: ".blog-nxt",
    prevEl: ".blog-prv",
  },
};
const Blog = () => {

  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);
  return (
    <>
      <section className="blog-area pt-125 pb-120">
        <div className="container  wow fadeInUp" data-wow-delay=".3s">
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
              <div className="blog-arrow d-flex align-items-center">
                <div className="blog-prv">
                  <i className="fa-regular fa-arrow-left"></i>
                </div>
                <div className="blog-nxt">
                  <i className="fa-regular fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
          <Swiper
            modules={[Navigation]}
          loop={isLoop}
            {...setting}
            className="swiper-container blog-active"
          >
            {blog_content.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="pb-50">
                  <div className="blog-item">
                    <div className="blog-item__thumb fix">
                      <img src={item.img} alt="blog-thumb" />
                    </div>
                    <div className="blog-item__content">
                      <h5 className="blog-item__title mb-15">
                        <Link href="/blog-details">{item.title}</Link>
                      </h5>
                      <p>{item.des}</p>
                      <div className="blog-item__date-info">
                        <ul className="d-flex align-items-center">
                          <li>
                            <i className="fa-light fa-clock"></i>Dec 28, 2022
                          </li>
                          <li>
                            <i className="fa-light fa-eye"></i>1,526 views
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-link text-center">
                <span>
                  Join our Community for Get Update :
                  <Link href="/blog-details">
                    Join our Community
                    <i className="fa-regular fa-arrow-right"></i>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
