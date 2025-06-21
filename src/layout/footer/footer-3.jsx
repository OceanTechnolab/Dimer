import Link from "next/link";
import React from "react";

const FooterThree = () => {
  return (
    <>
      <footer>
        <div className="footer-area tp-common-area footer-white-content theme-bg pt-105">
          <div className="tp-footer-top pb-25">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-md-6">
                  <div
                    className="footernewsletter mb-40 wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <h4 className="footernewsletter__title">
                      Subscribe Newslatter
                    </h4>
                    <p>
                      Exerci tation ullamcorper suscipit lobortis nisl aliquip{" "}
                    </p>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6">
                  <div
                    className="footernewsletter__form p-relative wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <form action="#">
                      <input type="text" placeholder="Enter Mail" />
                      <button className="footernewsletter__fw-news-btn">
                        <i className="fa-solid fa-paper-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="row pb-40 pt-50">
                <div className="col-lg-4 col-md-6">
                  <div
                    className="footercontact mb-40 wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div className="footercontact__icon">
                      <i className="flaticon-placeholder"></i>
                    </div>
                    <div className="footercontact__content">
                      <span className="footercontact__title">
                        <Link href="/contact">
                          Ta-134/A, Gulshan Badda Link Rd, <br /> Nya 10982 USA
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="footercontact mb-40 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <div className="footercontact__icon fw-pink-icon">
                      <i className="flaticon-mail"></i>
                    </div>
                    <div className="footercontact__content fw-pink-content">
                      <a href="mailto:Rasalinawillam@gmail.com">
                        Rasalinawillam@gmail.com
                      </a>
                      <a href="tel:+08987878773345">+08 98787 8773 345 </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="footercontact mb-40 wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div className="footercontact__icon fw-green-icon">
                      <i className="flaticon-24-hours"></i>
                    </div>
                    <div className="footercontact__content">
                      <span>Mon - Sat - 09:00PM - 06:00AM</span>
                      <span>Sunday - Off Day</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-area-bottom-tp">
            <div className="container">
              <div className="footer-bottom-border">
                <div className="row">
                  <div className="col-xxl-6 col-xl-7 col-lg-6 col-md-12 col-12">
                    <div className="footer-widget__copyright cpy-white-content">
                      <span>
                        © Copyright © {new Date().getFullYear()}
                        <Link href="/">  Theme_pure</Link>.
                        <i> All Rights Reserved Copyright</i>
                      </span>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-12 col-12">
                    <div className="footer-widget__copyright-info info-direction cpy-white-content-info">
                      <ul className="d-flex align-items-center">
                        <li>
                          <a href="#">Terms and conditions</a>
                        </li>
                        <li>
                          <a href="#">Privacy policy</a>
                        </li>
                        <li>
                          <a href="#">Pricing</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterThree;
