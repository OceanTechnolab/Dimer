import Link from "next/link";
import React from "react";


// gallery_content_data
const gallery_content_data = [
  {
    id: 1,
    class: "col-lg-4 col-md-6",
    img: "/assets/img/gallery/gallery-thumb-bg-1.jpg",
    title: "COVID ANALYSIS",
  },
  {
    id: 2,
    class: "col-lg-8 col-md-6 d-none d-lg-block",
    img: "/assets/img/gallery/gallery-thumb-bg-2.jpg",
    title: "Hiv Analysis & Testing",
  },
  {
    id: 3,
    class: "col-lg-4 col-md-6",
    img: "/assets/img/gallery/gallery-thumb-bg-3.jpg",
    title: "Zyrtec Analysis",
  },
  {
    id: 4,
    class: "col-lg-4 col-md-6",
    img: "/assets/img/gallery/gallery-thumb-bg-4.jpg",
    title: "Asthma Apply",
  },
  {
    id: 5,
    class: "col-lg-4 col-md-6",
    img: "/assets/img/gallery/gallery-thumb-bg-5.jpg",
    title: "Urine ANALYSIS",
  },
  {
    id: 6,
    class: "col-lg-8 col-md-12 d-lg-none",
    img: "/assets/img/gallery/gallery-thumb-bg-2.jpg",
    title: "Urine ANALYSIS",
  },
];

const Gallery = () => {
  return (
    <>
      <section className="gallery-area pb-50">
        <div
          className="gallery-bg-title theme-light-bg tp-box-space pt-125 pb-200 mr-30 ml-30"
          style={{
            backgroundImage: `url(/assets/img/shape/shape-bg-06.png)`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="tp-section text-center">
                  <span className="tp-section__sub-title sub-title-white left-line-white right-line-white mb-25">
                    Work Gallery
                  </span>
                  <h3 className="tp-section__title title-white mb-80">
                    Bioxlab Gallery
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery-item-bg wow fadeInUp" data-wow-delay=".3s">
          <div className="container">
            <div className="row">
              {gallery_content_data.map((item) => (
                <div key={item.id} className={item.class}>
                  <div className="gallery-item p-relative mb-30">
                    <img src={item.img} alt="gallery-thumb" />
                    <div className="gallery-item__content">
                      <h4 className="gallery-item__title">
                        <Link href="/portfolio-details">{item.title}</Link>
                      </h4>
                      <span>
                        <i className="fa-solid fa-tag"></i>
                        <Link href="/services-details">Genetics</Link>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="gallery-btn text-center mt-30">
                  <Link href="/portfolio-details" className="tp-btn">
                    Explore More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
