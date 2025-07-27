import Link from "next/link";
import React from "react";

// brands_img
const brands_img = [
  { img: "/assets/img/brand/brand-01.png" },
  { img: "/assets/img/brand/brand-02.png" },
  { img: "/assets/img/brand/brand-03.png" },
  { img: "/assets/img/brand/brand-04.png" },
  { img: "/assets/img/brand/brand-05.png" },
  { img: "/assets/img/brand/brand-04.png" },
];

const Brands = ({ style_2 = false, border_style = false }) => {
  // Duplicate the brands array for seamless loop
  const duplicatedBrands = [...brands_img, ...brands_img];

  return (
    <>
      <style jsx>{`
        .continuous-slider {
          overflow: hidden;
          white-space: nowrap;
        }

        .sliding-track {
          display: inline-flex;
          animation: slide 20s linear infinite;
          gap: 30px;
        }

        .brand-item {
          flex-shrink: 0;
          width: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .brand-item img {
          max-width: 100%;
          height: auto;
          object-fit: contain;
        }

        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 1400px) {
          .brand-item {
            width: 180px;
          }
        }

        @media (max-width: 1200px) {
          .brand-item {
            width: 160px;
          }
        }

        @media (max-width: 992px) {
          .brand-item {
            width: 140px;
          }
        }

        @media (max-width: 768px) {
          .brand-item {
            width: 120px;
          }
          .sliding-track {
            animation: slide 15s linear infinite;
          }
        }

        @media (max-width: 576px) {
          .brand-item {
            width: 100px;
          }
          .sliding-track {
            animation: slide 12s linear infinite;
          }
        }

        /* Pause on hover if desired */
        .continuous-slider:hover .sliding-track {
          animation-play-state: paused;
        }
      `}</style>

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
          <span className="tp-section__sub-title left-line mb-45">
            our Clients
          </span>
          <div className={`${border_style ? "brand-border pt-60 pb-60" : ""}`}>
            <div className="continuous-slider">
              <div className="sliding-track">
                {duplicatedBrands.map((item, i) => (
                  <div key={i} className="brand-item">
                    <Link href="/">
                      <img src={item.img} alt="brand" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
