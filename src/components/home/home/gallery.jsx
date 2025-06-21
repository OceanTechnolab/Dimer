import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ImagePopup from "@/modals/ImagePopup";


// slider setting
const setting = {
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  breakpoints: {
    1400: {
      slidesPerView: 4,
    },
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
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
};

// gallery_content
const gallery_content = [
  {
    id: 1,
    img: "assets/img/gallery/gal-thum-01.jpg",
    text1: "COVID ANALYSIS",
    text2: "Radiologist",
  },
  {
    id: 2,
    img: "assets/img/gallery/gal-thum-02.jpg",
    text1: "Hiv Analysis & Testing",
    text2: "Anaesthetist",
  },
  {
    id: 3,
    img: "assets/img/gallery/gal-thum-03.jpg",
    text1: "Zyrtec Analysis",
    text2: "Gynaecologist",
  },
  {
    id: 4,
    img: "assets/img/gallery/gal-thum-04.jpg",
    text1: "Asthma Apply",
    text2: "Genetics",
  },
  {
    id: 5,
    img: "assets/img/gallery/gal-thum-05.jpg",
    text1: "neurological ANALYSIS",
    text2: "Forensic",
  },
];


const Gallery = () => {
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);

  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(null);
  // image open state
  const [isOpen, setIsOpen] = useState(false);
  // handleImagePopup
  const handleImagePopup = (i) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };
  //  images
  const images = gallery_content.map((item) => item.img);

  return (
    <>
      <section
        className="gallery-area grey-bg pt-120 pb-130"
        style={{ backgroundImage: `url(/assets/img/shape/shape-bg-01.png)` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-section text-center">
                <span className="tp-section__sub-title left-line right-line mb-25">
                  Work Gallery
                </span>
                <h3 className="tp-section__title mb-70">Bioxlab Gallery</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div
            className="tp-gallery ml-15 mr-15 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="swiper-container gall-active">
              <Swiper {...setting} loop={isLoop} modules={[Navigation]}>
                {gallery_content.map((item, index) => (
                  <SwiperSlide key={item.id}>
                    <div className="tp-gallery__item p-relative mb-70">
                      <div className="tp-gallery__img p-relative">
                        <img src={item.img} alt="gallery-img" />
                        <div className="tp-gallery__info">
                          <a
                            onClick={() => handleImagePopup(index)}
                            className="popup-image"
                            style={{ cursor: "pointer" }}
                          >
                            <i className="fa-solid fa-plus"></i>
                          </a>
                        </div>
                      </div>
                      <div className="tp-gallery__content">
                        <h4 className="tp-gallery__title">
                          <Link href="/portfolio-details">{item.text1}</Link>
                        </h4>
                        <span>
                          <i className="fa-solid fa-tag"></i>
                          <Link href="/services-details">{item.text2}</Link>
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <Link className="tp-btn-second" href="/portfolio-details">
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* image light box start */}
      {isOpen && (
        <ImagePopup
          images={images}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
      {/* image light box end */}
    </>
  );
};

export default Gallery;
