import AnswerQuestion from "@/common/answer-question";
import Link from "next/link";
import React, { useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";



// related product list
const related_product = [
  {
    id: 1,
    img: "/assets/img/shop/shop-09.jpg",
    name: "Sphygmomanometer",
    price: "66.00",
    ratting: [
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-regular fa-star",
    ],
  },
  {
    id: 2,
    img: "/assets/img/shop/shop-10.jpg",
    name: "Glucometer",
    price: "46.00",
    ratting: [
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-regular fa-star",
    ],
  },
  {
    id: 3,
    img: "/assets/img/shop/shop-11.jpg",
    name: "Oxygen Breathing Machine",
    price: "70.00",
    ratting: [
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
    ],
  },
  {
    id: 4,
    img: "/assets/img/shop/shop-12.jpg",
    name: "Oxygen Breathing Machine",
    price: "70.00",
    ratting: [
      "fa-regular fa-star",
      "fa-regular fa-star",
      "fa-regular fa-star",
      "fa-regular fa-star",
      "fa-regular fa-star",
    ],
  },
];
// slider setting
const setting = {
  // Optional parameters
  loop: true,
  spaceBetween: 30,
  slidesPerView: 3,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  breakpoints: {
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
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
};

// product_item_list data
  const product_item_list = [
    {
      id: 1,
      title: "Product Details",
      active: "active",
      li_id: "home-tab-1",
      data_bs_target: "home-1",
      aria_controls: "home-1",
      aria_selected: true,
    },
    {
      id: 2,
      title: "Additional Info",
      active: "",
      li_id: "information-tab",
      data_bs_target: "additional-information",
      aria_controls: "additional-information",
      aria_selected: false,
    },
    {
      id: 3,
      title: "Review (08)",
      active: "",
      li_id: "reviews-tab",
      data_bs_target: "reviews",
      aria_controls: "reviews",
      aria_selected: false,
    },
    {
      id: 4,
      title: "Faq",
      active: "",
      li_id: "size-chart-tab",
      data_bs_target: "chart",
      aria_controls: "chart",
      aria_selected: false,
    },
  ];

const ProductDetailsArea = () => {
  const [productCount, setProductCount] = useState(1);
  const addBtn = () => {
    setProductCount((prev) => prev + 1);
  };
  const minusBtn = () => {
    if (productCount >= 1) {
      setProductCount((prev) => prev - 1);
    }
  };

  // product_review
  const product_review = [
    {
      id: 1,
      img: "/assets/img/shop/reviewer-01.png",
      name: "Siarhei Dzenisenka",
      date: "March 27, 2018 9:51 am",
      rating: [
        "fas fa-star",
        "fas fa-star",
        "fas fa-star",
        "fas fa-star",
        "fal fa-star",
      ],
      des: (
        <>
          This is cardigan is a comfortable warm classic piece. Great to layer
          with a light top and you can dress up or down given the jewel buttons.{" "}
          {`I'm 5'8”`} 128lbs a 34A and the Small fit fine.
        </>
      ),
    },
    {
      id: 2,
      img: "/assets/img/shop/reviewer-02.png",
      name: "Tommy Jarvis",
      date: "March 27, 2018 9:51 am",
      rating: [
        "fas fa-star",
        "fas fa-star",
        "fas fa-star",
        "fas fa-star",
        "fal fa-star",
      ],
      des: (
        <>
          This is cardigan is a comfortable warm classic piece. Great to layer
          with a light top and you can dress up or down given the jewel buttons.{" "}
          {`I'm 5'8”`} 128lbs a 34A and the Small fit fine.
        </>
      ),
    },
    {
      id: 3,
      img: "/assets/img/shop/reviewer-03.png",
      name: "Johnny Cash",
      date: "March 27, 2018 9:51 am",
      rating: [
        "fas fa-star",
        "fas fa-star",
        "fas fa-star",
        "fas fa-star",
        "fal fa-star",
      ],
      des: (
        <>
          This is cardigan is a comfortable warm classic piece. Great to layer
          with a light top and you can dress up or down given the jewel buttons.{" "}
          {`I'm 5'8”`} 128lbs a 34A and the Small fit fine.
        </>
      ),
    },
  ];

  return (
    <>
      <section className="shop-area pt-120 pb-70">
        <div className="container">
          <div className="shop-left-right ml-130 mr-130">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div
                  className="productthumb mb-40 wow fadeInRighLeft"
                  data-wow-delay=".4s"
                >
                  <img
                    src="/assets/img/shop/product-01.jpg"
                    alt="product-thumb"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div
                  className="product mb-40 ml-20 wow fadeInRighRight"
                  data-wow-delay=".4s"
                >
                  <div className="product__details-content mb-40">
                    <h5 className="product-dtitle mb-20">Medical Hand Glabs</h5>
                    <p>
                      Rorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do <br /> eiusmod tempor incididunt ut labore et
                      dolore.
                    </p>
                    <div className="product-dinfo mt-25">
                      <div className="product-rating">
                        <a href="#">
                          <i className="fa-solid fa-star"></i>
                        </a>
                        <a href="#">
                          <i className="fa-solid fa-star"></i>
                        </a>
                        <a href="#">
                          <i className="fa-solid fa-star"></i>
                        </a>
                        <a href="#">
                          <i className="fa-light fa-star"></i>
                        </a>
                        <a href="#">
                          <i className="fa-light fa-star"></i>
                        </a>
                      </div>
                      <span className="review-count">(4 customer review)</span>
                    </div>
                    <h5 className="product-dprice mt-30">
                      $28.00 <del>/38</del>
                    </h5>
                    <h6 className="product-model-title mt-30 mb-15">
                      Choose Color
                    </h6>
                    <div className="product-model-list mb-20">
                      <a href="#">tyk</a>
                      <a href="#">ffd2</a>
                      <a href="#">23tt</a>
                      <a href="#">r454</a>
                      <a href="#">45hy</a>
                    </div>
                    <div className="pro-quan-area d-sm-flex align-items-center mb-15">
                      <div className="product-quantity-title mr-25">
                        <label>Quantity</label>
                      </div>
                      <div className="tp-product-quantity mt-10 mb-10">
                        <span className="cart-minus">
                          <i
                            className="fa-solid fa-arrow-left"
                            onClick={minusBtn}
                          ></i>
                        </span>
                        <input
                          className="tp-cart-input"
                          type="text"
                          placeholder={productCount}
                        />
                        <span className="cart-plus">
                          <i
                            className="fa-solid fa-arrow-right"
                            onClick={addBtn}
                          ></i>
                        </span>
                      </div>
                    </div>
                    <div className="product-button">
                      <button className="tp-btn mr-20">Add to cart</button>
                      <button className="tp-btn-second">Buy now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="productdetails pt-35 pb-75">
              <div className="row">
                <div className="col-lg-12">
                  <div className="product-additional-tab">
                    <div className="pro-details-nav mb-40">
                      <ul
                        className="nav nav-tabs pro-details-nav-btn"
                        id="myTabs"
                        role="tablist"
                      >
                        {product_item_list.map((item) => (
                          <li
                            key={item.id}
                            className="nav-item"
                            role="presentation"
                          >
                            <button
                              className={`nav-links ${item.active}`}
                              id={item.li_id}
                              data-bs-toggle="tab"
                              data-bs-target={`#${item.data_bs_target}`}
                              type="button"
                              role="tab"
                              aria-controls={item.aria_controls}
                              aria-selected={item.aria_selected}
                            >
                             {item.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div
                      className="tab-content tp-content-tab"
                      id="myTabContent-2"
                    ></div>
                    <div
                      className="tab-content tp-content-tab"
                      id="myTabContent-2"
                    >
                      <div
                        className="tab-para tab-pane fade show active"
                        id="home-1"
                        role="tabpanel"
                        aria-labelledby="home-tab-1"
                      >
                        <p className="mb-30">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Curabitur vulputate vestibulum Phasellus
                          rhoncus, dolor eget viverra pretium, dolor tellus
                          aliquet nunc, vitae ultricies erat elit eu lacus.
                          Vestibulum non justo consectetur, cursus ante,
                          tincidunt sapien. Nulla quis diam sit amet turpis
                          interdum accumsan quis nec enim. Vivamus faucibus ex
                          sed nibh egestas elementum. Mauris et bibendum dui.
                          Aenean consequat pulvinar luctus. Suspendisse
                          consectetur tristique tortor
                        </p>
                        <p>
                          We have covered many special events such as fireworks,
                          fairs, parades, races, walks, awards ceremonies,
                          fashion shows, sporting events, and even a memorial
                          service.Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Curabitur vulputate vestibulum
                          Phasellus rhoncus, dolor eget viverra pretium, dolor
                          tellus aliquet nunc, vitae ultricies erat elit eu
                          lacus. Vestibulum non justo consectetur, cursus ante,
                          tincidunt sapien. Nulla quis diam sit amet turpis
                          interdum accumsan quis nec enim. Vivamus faucibus ex
                          sed nibh egestas elementum. Mauris et bibendum dui.
                          Aenean consequat pulvinar luctus. Suspendisse
                          consectetur
                        </p>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="additional-information"
                        role="tabpanel"
                        aria-labelledby="information-tab"
                      >
                        <div className="product__details-info table-responsive">
                          <table className="table table-striped">
                            <tbody>
                              <tr>
                                <td className="add-info">Weight</td>
                                <td className="add-info-list"> 2 lbs</td>
                              </tr>
                              <tr>
                                <td className="add-info">Dimensions</td>
                                <td className="add-info-list">
                                  {" "}
                                  12 × 16 × 19 in
                                </td>
                              </tr>
                              <tr>
                                <td className="add-info">Product</td>
                                <td className="add-info-list">
                                  {" "}
                                  Purchase this product on rag-bone.com
                                </td>
                              </tr>
                              <tr>
                                <td className="add-info">Color</td>
                                <td className="add-info-list"> Gray, Black</td>
                              </tr>
                              <tr>
                                <td className="add-info">Size</td>
                                <td className="add-info-list"> S, M, L, XL</td>
                              </tr>
                              <tr>
                                <td className="add-info">Model</td>
                                <td className="add-info-list"> Model </td>
                              </tr>
                              <tr>
                                <td className="add-info">Shipping</td>
                                <td className="add-info-list">
                               
                                  Standard shipping: $5,95L
                                </td>
                              </tr>
                              <tr>
                                <td className="add-info">Care Info</td>
                                <td className="add-info-list">
                                 
                                  Machine Wash up to 40ºC/86ºF Gentle Cycle
                                </td>
                              </tr>
                              <tr>
                                <td className="add-info">Brand</td>
                                <td className="add-info-list"> Kazen</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="reviews"
                        role="tabpanel"
                        aria-labelledby="reviews-tab"
                      >
                        <div className="product-details-review">
                          <h3 className="tp-comments-title mb-35">
                            3 reviews for “Wide Cotton Tunic extreme hammer”
                          </h3>
                          <div className="latest-comments mb-55">
                            <ul>
                              {product_review.map((item) => (
                                <li key={item.id}>
                                  <div className="comments-box d-flex">
                                    <div className="comments-avatar mr-25">
                                      <img src={item.img} alt="" />
                                    </div>
                                    <div className="comments-text">
                                      <div className="comments-top d-sm-flex align-items-start justify-content-between mb-5">
                                        <div className="avatar-name">
                                          <b>{item.name}</b>
                                          <div className="comments-date mb-20">
                                            <span>{item.name}</span>
                                          </div>
                                        </div>
                                        <div className="user-rating">
                                          <ul>
                                            {
                                              item.rating.map((rat, i) =>
                                               <li key={i}>
                                              <a href="#">
                                                <i className={rat}></i>
                                              </a>
                                            </li>
                                                                                            
                                              )
                                            }
                                           
                                          </ul>
                                        </div>
                                      </div>
                                      <p className="m-0">
                                        This is cardigan is a comfortable warm
                                        classic piece. Great to layer with a
                                        light top and you can dress up or down
                                        given the jewel buttons. {`I'm 5'8” `}
                                        128lbs a 34A and the Small fit fine.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                              ))}
                             
                            </ul>
                          </div>
                          <div className="product-details-comment pb-100">
                            <div className="comment-title mb-20">
                              <h3>Add a review</h3>
                              <p>
                                Your email address will not be published.
                                Required fields are marked*
                              </p>
                            </div>
                            <div className="comment-rating mb-20 d-flex">
                              <span>Overall ratings</span>
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="comment-input-box">
                              <form action="#">
                                <div className="row">
                                  <div className="col-xxl-12">
                                    <div className="comment-input">
                                      <textarea placeholder="Your review..."></textarea>
                                    </div>
                                  </div>
                                  <div className="col-xxl-6">
                                    <div className="comment-input">
                                      <input
                                        type="text"
                                        placeholder="Your Name*"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xxl-6">
                                    <div className="comment-input">
                                      <input
                                        type="email"
                                        placeholder="Your Email*"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xxl-12">
                                    <div className="comment-submit">
                                      <button type="submit" className="tp-btn">
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="chart"
                        role="tabpanel"
                        aria-labelledby="size-chart-tab"
                      >
                        <div className="shop-faq">
                          <AnswerQuestion />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tpproductitem">
              <div className="row">
                <div className="col-lg-12">
                  <h5 className="product-dtitle mb-50">Related Product</h5>
                </div>
              </div>
            </div>
            <Swiper
              {...setting}
              modules={[Navigation]}
              className="swiper-container shop-slider-active"
            >
              {related_product.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="swiper-slide">
                    <div className="tpshopitem mb-50">
                      <div className="tpshopitem__thumb p-relative fix mb-35">
                        <Link href="/shop">
                          <img src={item.img} alt="shop-thumb" />
                        </Link>
                        <div className="tpshopitem__thumb-icon">
                          <a href="#">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#">
                            <i className="fal fa-shopping-cart"></i>
                          </a>
                          <a href="#">
                            <i className="fal fa-heart"></i>
                          </a>
                        </div>
                      </div>
                      <div className="tpshopitem__content text-center">
                        <span className="tpshopitem__title mb-5">
                          <Link href="/shop">{item.name}</Link>
                        </span>
                        <p>${item.price}</p>
                        <div className="tpshopitem__review">
                          {item.ratting.map((rat, i) => (
                            <i key={i} className={rat}></i>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsArea;
