import Sidebar from "@/common/sidebar";
import useSticky from "hooks/use-sticky";
import Link from "next/link";
import React, { useState } from "react";
import NavMenu from "./nav-menu";

const HeaderTwo = () => {
  const { sticky } = useSticky();
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div
        id="header-mob-sticky"
        className={`tp-mobile-header-area pt-15 pb-15 d-xl-none ${
          sticky ? "header-sticky" : ""
        } `}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 col-10">
              <div className="tp-mob-logo">
                <Link href="/">
                  <img src="/assets/img/logo/logo.png" alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-md-8 col-2">
              <div className="tp-mobile-bar d-flex align-items-center justify-content-end">
                <div className="tp-bt-btn-banner d-none d-md-block d-xl-none mr-30">
                  <a className="tp-bt-btn" href="tel:123456">
                    <svg
                      width="14"
                      height="19"
                      viewBox="0 0 14 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2" cy="2" r="2" fill="#0E63FF" />
                      <circle cx="7" cy="2" r="2" fill="#0E63FF" />
                      <circle cx="12" cy="2" r="2" fill="#0E63FF" />
                      <circle cx="12" cy="7" r="2" fill="#0E63FF" />
                      <circle cx="12" cy="12" r="2" fill="#0E63FF" />
                      <circle cx="7" cy="7" r="2" fill="#0E63FF" />
                      <circle cx="7" cy="12" r="2" fill="#0E63FF" />
                      <circle cx="7" cy="17" r="2" fill="#0E63FF" />
                      <circle cx="2" cy="7" r="2" fill="#0E63FF" />
                      <circle cx="2" cy="12" r="2" fill="#0E63FF" />
                    </svg>
                    <span>Help Desk :</span>+91 590 088 55
                  </a>
                </div>
                <button
                  onClick={() => setIsActive(true)}
                  className="tp-menu-toggle"
                >
                  <i className="far fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="d-none d-xl-block">
        <div
          className={`header-custom ${sticky ? "header-sticky" : ""}`}
          id="header-sticky"
        >
          <div className="header-logo-box">
            <Link href="/">
              <img src="/assets/img/logo/logo.png" alt="logo" />
            </Link>
          </div>
          <div className="header-menu-box">
            <div className="header-menu-top">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <div className="header-top-mob">
                    <svg
                      width="14"
                      height="19"
                      viewBox="0 0 14 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2" cy="2" r="2" fill="#0E63FF" />
                      <circle cx="7" cy="2" r="2" fill="#0E63FF" />
                      <circle cx="12" cy="2" r="2" fill="#0E63FF" />
                      <circle cx="12" cy="7" r="2" fill="#0E63FF" />
                      <circle cx="12" cy="12" r="2" fill="#0E63FF" />
                      <circle cx="7" cy="7" r="2" fill="#0E63FF" />
                      <circle cx="7" cy="12" r="2" fill="#0E63FF" />
                      <circle cx="7" cy="17" r="2" fill="#0E63FF" />
                      <circle cx="2" cy="7" r="2" fill="#0E63FF" />
                      <circle cx="2" cy="12" r="2" fill="#0E63FF" />
                    </svg>
                    <span>Help Desk :</span>
                    <a href="tel:+9159008855"> +91 590 088 55 </a>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="header-time">
                    <span>
                      <i className="fa-light fa-clock-ten"></i> Monday - Friday
                      09:00 am - 05:00 Pm
                    </span>
                    <span>Monday - Friday 09:00 am - 05:00 Pm</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-menu-bottom">
              <div className="row">
                <div className="col-lg-7">
                  <div className="main-menu main-menu-second">
                    <nav id="mobile-menu">
                      <NavMenu />
                    </nav>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="header-cart-order d-flex align-items-center justify-content-end">
                    <div className="header-cart-list  d-flex align-items-center justify-content-end mr-50">
                      <button
                        onClick={() => setIsActive(true)}
                        className="tp-menu-toggle mr-40"
                      >
                        <i className="fa-solid fa-list"></i>
                      </button>

                      <div className="tp-cart-icon-area">
                        <button>
                          <i className="fa-solid fa-basket-shopping"></i>
                        </button>
                        <div className="tpcarticon">
                          <ul>
                            <li>
                              <div className="tpcarticon__item">
                                <div className="tpcarticon__img">
                                  <img
                                    src="/assets/img/shop/shop-05.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="tpcarticon__content">
                                  <span className="tpcarticon__content-title">
                                    <Link href="/shop">Stethoscope Superb</Link>
                                  </span>
                                  <div className="tpcarticon__cart-price">
                                    <span className="new">$162.8</span>
                                    <span>
                                      <del>$229.9</del>
                                    </span>
                                  </div>
                                </div>
                                <div className="tpcarticon__del">
                                  <a href="#">
                                    <i className="far fa-trash-alt"></i>
                                  </a>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="tpcarticon__item">
                                <div className="tpcarticon__img">
                                  <img
                                    src="/assets/img/shop/shop-09.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="tpcarticon__content">
                                  <span className="tpcarticon__content-title">
                                    <Link href="/shop">Sphygmomanometer</Link>
                                  </span>
                                  <div className="tpcarticon__cart-price">
                                    <span className="new">$139.9</span>
                                    <span>
                                      <del>$229.9</del>
                                    </span>
                                  </div>
                                </div>
                                <div className="tpcarticon__del">
                                  <a href="#">
                                    <i className="far fa-trash-alt"></i>
                                  </a>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="tpcarticon__total-price">
                                <span className="f-left">Total:</span>
                                <span className="f-right">$300.0</span>
                              </div>
                            </li>
                            <li>
                              <div className="tpcarticon__checkout-link">
                                <Link href="/cart">Shopping Cart</Link>
                                <Link className="sec-red-btn" href="/checkout">
                                  Checkout
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <Link className="header-bottom-btn" href="/about">
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* side bar start */}
      <Sidebar isActive={isActive} setIsActive={setIsActive} />
      {/* side bar end */}
    </>
  );
};

export default HeaderTwo;
