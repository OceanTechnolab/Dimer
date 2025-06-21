import Link from "next/link";
import React from "react";


// blog_content
const blog_content = [
  {
    id: 1,
    bg_img: "/assets/img/blog/blog-thumb-07.jpg",
    img: "/assets/img/icon/blog-ava-01.png",
    name: "Alextina Rix",
    category: "Medicine",
    date: "Dec 28, 2022",
    views: "1,526 views",
    title: "Coronavirus global health ecorage Design System",
    color: "",
  },
  {
    id: 2,
    bg_img: "/assets/img/blog/blog-thumb-08.jpg",
    img: "/assets/img/icon/blog-ava-02.png",
    name: "Robart Foxid",
    category: "Medicine",
    date: "Dec 28, 2022",
    views: "1,526 views",
    title: "Some of the Social Determinants of helth Tips",
    color: "pink-blog",
  },
  {
    id: 3,
    bg_img: "/assets/img/blog/blog-thumb-09.jpg",
    img: "/assets/img/icon/blog-ava-03.png",
    name: "Brookly Simmons",
    category: "Medicine",
    date: "Dec 28, 2022",
    views: "1,526 views",
    title: "SExpress Scripts Throw Lifeline Digital Health",
    color: "green-blog",
  },
];

const Blog = () => {
  return (
    <>
      <section
        className="blog-area tp-common-area grey-bg pt-125 pb-100"
        style={{ backgroundImage: `url("/assets/img/shape/shape-bg-09.png")` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8 col-12">
              <div className="tp-section mb-20">
                <span className="tp-section__sub-title left-line mb-25">
                  Blog & Article
                </span>
                <h3 className="tp-section__title mb-60">Recent Blog Post</h3>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="tp-blog-btn mb-30">
                <Link href="/blog" className="tp-btn-second">
                  All Blog
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            {blog_content.map((item) => (
              <div key={item.id} className="col-xxl-4 col-lg-6 col-md-6">
                <div
                  className={`blogthumb mb-30 ${item.color} wow fadeInUp`}
                  data-wow-delay=".7s"
                  style={{ backgroundImage: `url(${item.bg_img})` }}
                >
                  <div className="blogitem">
                    <div className="fix inner-blog-wrap">
                      <div className="blogitem__avata-part">
                        <div className="blogitem__avata">
                          <div className="blogitem__avata-icon">
                            <img src={item.img} alt="blog-avata" />
                          </div>
                          <div className="blogitem__avata-content">
                            <span>Post by:</span>
                            <Link href="/">{item.name}</Link>
                          </div>
                        </div>
                        <div className="blogitem__medi">
                          <Link href="/shop">{item.category}</Link>
                        </div>
                      </div>
                      <div className="blogitem__title-area p-relative">
                        <div className="blog-item__date-info mb-15">
                          <ul className="d-flex align-items-center">
                            <li>
                              <i className="fa-light fa-clock"></i>
                              {item.date}
                            </li>
                            <li>
                              <i className="fa-light fa-eye"></i>
                              {item.views}
                            </li>
                          </ul>
                        </div>
                        <h5 className="blogitem__title mb-20">
                          <Link href="/blog-details">{item.title}</Link>
                        </h5>
                        <div className="tp-blog__btn blog-bg-btn">
                          <Link href="/blog">Read moRe</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
