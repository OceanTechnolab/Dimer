import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";



// ts img
const ts_img = [
  {
    img: "assets/img/icon/testi-ava-04.png",
  },
  {
    img: "assets/img/icon/testi-ava-05.png",
  },
  {
    img: "assets/img/icon/testi-ava-06.png",
  },
  {
    img: "assets/img/icon/testi-ava-07.png",
  },
];

 // ts_text
const ts_text = [
  {
    des: (
      <>
        “Bioxlab is another theme that is beautiful and professionally
        constructed by the developers. The price for the template is cheap but
        not the quality of the product. What a bargain. This theme works for
        many types of web sites and seems to be durable. Does not break and its
        easy to work with.
      </>
    ),
    name: "Darlene Robertson",
    title: "Programmer of (FlaxStudio)",
  },
  {
    des: (
      <>
        “Bioxlab is another theme that is beautiful and professionally
        constructed by the developers. The price for the template is cheap but
        not the quality of the product. What a bargain. This theme works for
        many types of web sites and seems to be durable. Does not break and its
        easy to work with.
      </>
    ),
    name: "Courtney Henry",
    title: "Programmer of (FlaxStudio)",
  },
  {
    des: (
      <>
        “Bioxlab is another theme that is beautiful and professionally
        constructed by the developers. The price for the template is cheap but
        not the quality of the product. What a bargain. This theme works for
        many types of web sites and seems to be durable. Does not break and its
        easy to work with.
      </>
    ),
    name: "Kathryn Murphy",
    title: "Manager of (FlaxStudio)",
  },
  {
    des: (
      <>
        “Bioxlab is another theme that is beautiful and professionally
        constructed by the developers. The price for the template is cheap but
        not the quality of the product. What a bargain. This theme works for
        many types of web sites and seems to be durable. Does not break and its
        easy to work with.
      </>
    ),
    name: "Robertson JR",
    title: "CEO of (FlaxStudio)",
  },
];

const bg_style = {
  backgroundImage: `url(/assets/img/shape/shape-bg-05.png)`
};


const Testimonial = ({ bg_img }) => {
  const [isLoop, setIsLoop] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  useEffect(() => {
    setIsLoop(true);
  }, []);
  return (
    <>
      <div
        className={`testimonial-area pt-130 pb-125 ${
          bg_img ? "testi-bg theme-light-bg" : "tp-common-area"
        } `}
        style={bg_img ? bg_style : {}}
      >
        <div
          className="container p-relative  wow fadeInUp"
          data-wow-delay=".3s"
        >
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div
                className={`testi-thumb ${
                  bg_img ? "" : "tp-testi-thumb-ava"
                } text-center`}
              >
                <div className="swiper-container swiper  test-ava-active">
                  <Swiper
                    loop={isLoop}
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    navigation={{
                      nextEl: ".testi-button-next",
                      prevEl: ".testi-button-prev",
                    }}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="testi-avta-bottom pb-70"
                    breakpoints={{
                      1400: {
                        slidesPerView: 4,
                      },
                      1200: {
                        slidesPerView: 3,
                      },
                      992: {
                        slidesPerView: 3,
                      },
                      768: {
                        slidesPerView: 3,
                      },
                      576: {
                        slidesPerView: 1,
                      },
                      0: {
                        slidesPerView: 1,
                      },
                    }}
                  >
                    {ts_img.map((img, i) => (
                      <SwiperSlide key={i}>
                        <img src={img.img} alt="testi-avata" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
            <div
              className={`${bg_img ? "testi-arrow" : "tp-testimonial-arrow"}`}
            >
              <div className="testi-button-next">
                <i className="fa-regular fa-arrow-right"></i>
              </div>
              <div className="testi-button-prev">
                <i className="fa-regular fa-arrow-left"></i>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-10 col-md-11 col-12">
              <Swiper
                loop={isLoop}
                spaceBetween={10}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                navigation={{
                  nextEl: ".testi-button-next",
                  prevEl: ".testi-button-prev",
                }}
                modules={[FreeMode, Navigation, Thumbs]}
                className={`swiper-container ${
                  bg_img ? "" : "tp-testimonial-text "
                } test-active`}
              >
                {ts_text.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="testi-content text-center">
                      <p>{item.des}</p>
                      <i>{item.name}</i>
                      <span>{item.title}</span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
