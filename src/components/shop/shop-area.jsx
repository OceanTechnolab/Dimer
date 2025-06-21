import shop_data from "@/data/shop-data";
import NiceSelect from "@/ui/nice-select";
import Link from "next/link";
import React from "react";

const ShopArea = () => {
  const selectHandler = (e) => {};
  return (
    <>
      <div className="shop-area pt-120 pb-130">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6">
              <div className="tpproduct">
                <span>Showing 1-12 of 54 results</span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="tpfilter d-flex align-items-center">
                <span>Short by</span>
                <NiceSelect
                  options={[
                    // { value: "Short by", text: "Short by" },
                    { value: "New", text: "New" },
                    { value: "Popularity", text: "Popularity" },
                    { value: "Average rating", text: "Average rating" },
                    { value: "Latest", text: "Latest" },
                    { value: "Price: low to high", text: "Price: low to high" },
                    { value: "Price: high to low", text: "Price: high to low" },
                  ]}
                  defaultCurrent={0}
                  onChange={selectHandler}
                />
               
              </div>
            </div>
          </div>
          <div className="row">
            {shop_data.map((item) => (
              <div key={item.id} className="col-xl-3 col-lg-4 col-md-4">
                <div
                  className="tpshopitem mb-50 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="tpshopitem__thumb p-relative fix p-relative mb-35">
                    <Link href="/product-details">
                      <img src={item.img} alt="shop-thumb" />
                    </Link>
                    {item.product_news && (
                      <span className="tpshopitem__product-base">
                        {item.product_news}
                      </span>
                    )}
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
                      <Link href="/product-details">{item.title}</Link>
                    </span>
                    <p>${item.price}</p>
                    <div className="tpshopitem__review">
                      {item.ratting.map((start, i) => (
                        <i key={i} className={start}></i>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-12">
              <div className="basic-pagination text-center mt-15">
                <nav>
                  <ul>
                    <li>
                      <Link href="/product-details">
                        <i className="fa-light fa-arrow-left-long"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/product-details">1</Link>
                    </li>
                    <li>
                      <span className="current">2</span>
                    </li>
                    <li>
                      <Link href="/product-details">3</Link>
                    </li>
                    <li>
                      <Link href="/product-details">...</Link>
                    </li>
                    <li>
                      <Link href="/product-details">
                        <i className="fa-light fa-arrow-right-long"></i>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopArea;
