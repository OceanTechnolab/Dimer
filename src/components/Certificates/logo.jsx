import VideoPopup from "@/modals/video-popup";
import Link from "next/link";
import React, { useState } from "react";

const Logo = () => {
  // about content data
  const about_content = {
        about_bg: "/assets/img/shape/shape-bg-05.png",
   // about_img: "/assets/img/about/about-bg-02.png",
   // popup_video: "https://www.youtube.com/watch?v=-BpXNPHiB2U",
   // about_thumb: "/assets/img/about/about-bg-03.png",
    title: "Certifications",
    sub_title: "About",
    des_1: (
      <>
        At Dimer Scientific, certifications aren't just checkboxes—they’re the 
        foundation of how we operate. Our accreditations from leading international 
        bodies assure our partners of consistent performance, purity, and safety in every product.
      </>
    ),

    // booking data
    booking_bg: "/assets/img/shape/shape-bg-04.png",
    b_sub_title: "book Free sampling",
    b_title: (
      <>
        Free Sampling at your <br /> Home Address
      </>
    ),
    b_btn: "Book Now",
    b_img: "/assets/img/shape/logo-shape-1.png",
  };
  const {
    about_bg,
    title,
    des_1,
    dex_2,
  } = about_content;

  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section
        className="about-area grey-bg pt-20 tp-box-space pb-20 ml-30 mr-30"
        style={{
          backgroundImage: `url(${about_bg})`,
        }}
      >
        <div className="about-wrapper">
          <div className="container">
            <div className="row">
              
                <div
                  className="about-content ml-60 mb-60 wow fadeInRight"
                  data-wow-delay=".3s"
                >
                  <div className="tp-section">
                    <h3 className="tp-section__title mb-45">{title}</h3>
                    <i>{des_1}</i>
                    <p className=" mr-20 mb-35">{dex_2}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    <section className="cert-images-section pt-50 pb-50">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4 col-12 mb-50">
                    <img
                        src="/assets/img/certificates/certification-01.jpg"
                        alt="Certificate 1"
                        className="img-fluid rounded shadow"
                    />
                </div>
                <div className="col-md-4 col-12 mb-50">
                    <img
                        src="/assets/img/certificates/certification-02.jpg"
                        alt="Certificate 2"
                        className="img-fluid rounded shadow"
                    />
                </div>
                <div className="col-md-4 col-12 mb-50">
                    <img
                        src="/assets/img/certificates/certification-03.jpg"
                        alt="Certificate 3"
                        className="img-fluid rounded shadow"
                    />
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default Logo;