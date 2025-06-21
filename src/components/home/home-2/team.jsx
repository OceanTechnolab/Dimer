import team_home_two from "@/data/team-home-2";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


// slider setting
const setting = {
  slidesPerView: 4,
  autoplay: {
    delay: 6000,
  },
  breakpoints: {
    1400: {
      slidesPerView: 4,
    },
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
    nextEl: ".team-nxt",
    prevEl: ".team-prv",
  },
};

const Team = () => {
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);
  return (
    <>
      <section className="team-area pb-55">
        <div className="container">
          <div className="p-relative">
            <div className="row">
              <div className="col-lg-12">
                <div className="tp-section text-center">
                  <span className="tp-section__sub-title left-line right-line mb-25">
                    OUr Team
                  </span>
                  <h3 className="tp-section__title mb-70">Our Specialist</h3>
                </div>
              </div>
            </div>
            <Swiper
              {...setting}
              modules={[Navigation]}
              loop={isLoop}
              className="swiper-container tp-team-active wow fadeInUp"
              data-wow-delay=".3s"
            >
              {team_home_two.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="swiper-slide">
                    <div className="team-item mb-30">
                      <div className="team-item__thumb mb-40">
                        <img src={item.img} alt="team-thumb" />
                      </div>
                      <div className="team-item__content">
                        <h5 className="team-item__title mb-15">
                          <Link href="/team-details">{item.name}</Link>
                        </h5>
                        <span>{item.title}</span>
                        <div className="team-item__social-info">
                          {item.social_links.map((l, i) => (
                            <a key={i} href={l.link} target={l.target}>
                              <i className={l.icon}></i>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="team-arrow">
              <div className="team-prv">
                <i className="fa-regular fa-arrow-left"></i>
              </div>
              <div className="team-nxt">
                <i className="fa-regular fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
