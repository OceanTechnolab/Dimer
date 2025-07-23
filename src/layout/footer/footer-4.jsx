import Link from "next/link";
import React from "react";

const FooterFour = ({ style_2 = false }) => {
  return (
    <>
      <footer>
        <div
          className={`footer-area ${
            style_2 ? "pt-105" : "tp-footer-white-content theme-bg pt-95"
          } `}
        >
          <div className="tp-footer-top pb-25">
            <div className="container">
              <div className="row footer-flex-row">
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-1 mb-40 wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div className="footerimage">
                      <img className="footerimage "src="/assets/img/logo/DIMER_Logo.webp" alt="image" />
                    </div>
                    <div className="tp-footer-widget__content mb-20">
                      <i>FEEL FREE TO CONTACT US</i>
                      <h5 className="tp-footer-widget__contact mb-20">
                        <a href="tel:+916358848151">+91 635 884 8151</a>
                      </h5>
                      <a href="mailto:Info@dimerscientific.com">Info@dimerscientific.com</a>
                    </div>
                     <div className="tp-footer-widget__social fw-social">
                      <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fa-light fa-basketball"></i>
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-2 mb-40 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <span className="tp-footer-widget__title mb-15">
                      Chromapure
                    </span>
                    <div className="tp-footer-widget__links mb-35">
                      <ul>
                        <li>
                          <Link href="/gc-hs">GC-HS solvents</Link>
                        </li>
                        <li>
                          <Link href="/lc-ms">LC-MS Solvents</Link>
                        </li>
                        <li>
                          <Link href="/hplc">HPLC solvents</Link>
                        </li>
                        <li>
                          <Link href="/ion-pairing">Ion pairing reagents</Link>
                        </li>
                        <li>
                          <Link href="/bile-salts"> Bile salts & SLS </Link>
                        </li>
                        <li>
                          <Link href="/gc-reference-standards">GC standards</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                 <div className="col-xl-2 col-lg-2 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-2 mb-40 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <span className="tp-footer-widget__title mb-15">
                      Elementa
                    </span>
                    <div className="tp-footer-widget__links mb-35">
                      <ul>
                        <li>
                          <Link href="/coa">Biological buffers</Link>
                        </li>
                        <li>
                          <Link href="/certificates">Building Blocks</Link>
                        </li>
                        <li>
                          <Link href="/periodic-table">Periodic table</Link>
                        </li>
                        <li>
                          <Link href="/label-identification">Solar Chemicals</Link>
                        </li>
                        <li>
                          <Link href="/conditions">Battery materials</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
               <div className="col-xl-2 col-lg-2 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-2 mb-40 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <span className="tp-footer-widget__title mb-15">
                      Resources
                    </span>
                    <div className="tp-footer-widget__links mb-35">
                       <ul>
                        <li>
                          <Link href="/coa">COA</Link>
                        </li>
                        <li>
                          <Link href="/certificates">Certificates</Link>
                        </li>
                        <li>
                          <Link href="/periodic-table">Periodic table</Link>
                        </li>
                        <li>
                          <Link href="/label-identification">Label-identification</Link>
                        </li>
                        <li>
                          <Link href="/conditions">Conditions</Link>
                        </li>
                        <li>
                          <Link href="/about">Applications</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-2 mb-40 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <span className="tp-footer-widget__title mb-15">
                      Useful links
                    </span>
                    <div className="tp-footer-widget__links mb-35">
                      <ul>
                        <li>
                          <Link href="/manufacturing">Manufacturing</Link>
                        </li>
                        <li>
                          <Link href="/certificates">Gallery</Link>
                        </li>
                        <li>
                          <Link href="/about">About us</Link>
                        </li>
                        <li>
                          <Link href="/contact">ContactUs</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-area-bottom fw-border">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                  <div className="footer-widget__copyright copyright-white">
                  <span>
                      © Copyright ©{new Date().getFullYear()}
                      <Link href="/"> Dimer Scientific</Link>.
                      <i> All Rights Reserved</i>
                    </span>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                  <div className="footer-widget__copyright-info info-direction">
                    <ul className="d-flex align-items-center">
                      <li>
                        <a href="#">Terms and conditions</a>
                      </li>
                      <li>
                        <a href="#">Privacy policy</a>
                      </li>
                      <li>
                        <Link href="https://www.oceantechnolab.com/"> Digital Alchemy by Ocean Technolab</Link>
                      </li>
                    </ul>
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

export default FooterFour;
