import VideoPopup from "@/modals/video-popup";
import Link from "next/link";
import React, { useState } from "react";

const Aboutfirst = () => {
  // about content data
  const about_content = {
    about_bg: "/assets/img/shape/shape-bg-05.png",
    about_img: "/assets/img/about/about-1.webp",
    about_thumb: "/assets/img/about/custom.webp",
    title: "Driving Innovation in Research & Development Chemistry",
    sub_title: "About",
    des_1: (
      <>
        With over a decade of expertise, Dimer Scientific is at the forefront of synthesizing and developing specialized compounds using breakthrough chemistry.
      </>
    ),
    dex_2: (
      <>
        We deliver more than 25,000+ products across key segments—including analytical solvents, building blocks, specialty chemicals, and metal science compounds—supporting industries from pharmaceuticals to petrochemicals.
      </>
    ),
    btn: "CONTACT US",
    // booking data
    booking_bg: "/assets/img/shape/shape-bg-04.png",
    b_sub_title: "book Free sampling",
    b_title: (
      <>
        Free Sampling at your <br /> Home Adress
      </>
    ),
    b_btn: "Book Now",
    b_img: "/assets/img/shape/logo-shape-1.png",
  };
  const {
    about_bg,
    about_img,
    popup_video,
    about_thumb,
    sub_title,
    title,
    des_1,
    dex_2,
    btn,
    booking_bg,
    b_sub_title,
    b_title,
    b_btn,
    b_img,
  } = about_content;

  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section
        className="about-area grey-bg pt-130 tp-box-space pb-130 ml-30 mr-30"
        style={{
          backgroundImage: `url(${about_bg})`,
        }}
      >
        <div className="about-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-12 col-12">
                <div
                  className="about-thumb text-lg-center p-relative ml-85 mb-60 wow fadeInLeft"
                  data-wow-delay=".3s"
                >
                  <img src={about_img} alt="about-thumb" />
                  <div className="about-thumb-shape d-none d-md-block">
                    <img src={about_thumb} alt="about-shape" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 col-12">
                <div
                  className="about-content ml-60 mb-60 wow fadeInRight"
                  data-wow-delay=".3s"
                >
                  <div className="tp-section">
                    <span className="tp-section__sub-title left-line mb-25">
                      {sub_title}
                    </span>
                    <h3 className="tp-section__title mb-45">{title}</h3>
                    <i>{des_1}</i>
                    <p className=" mr-20 mb-35">{dex_2}</p>
                  </div>
                  <div className="about-content__btn">
                    <Link href="/contact" className="tp-btn">
                      {btn}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutfirst;
