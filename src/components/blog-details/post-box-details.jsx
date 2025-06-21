import Link from "next/link";
import React from "react";
import BlogSearch from "../blog/blog-search";
import Category from "../blog/category";
import RecentPost from "../blog/recent-post";
import Tags from "../blog/tags";
import CommentForm from "../forms/comment-form";

const PostBoxDetails = () => {
 
  return (
    <>
      <div
        className="postbox__area pt-130 pb-110 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-12">
              <div className="postbox__wrapper pr-20">
                <article className="postbox__item format-image mb-50 transition-3">
                  <div className="postbox__thumb w-img mb-30">
                    <Link href="/blog-details">
                      <img src="/assets/img/blog/blog-in-01.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="postbox__content">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="postbox__content-area pb-20">
                          <div className="postbox__meta mb-40">
                            <span>
                              <Link href="/team-details">
                                <i className="fa-regular fa-user"></i> Alextina
                              </Link>
                            </span>
                            <span>
                              <i className="fa-regular fa-clock"></i> Dec 28,
                              2022
                            </span>
                            <span>
                              <a href="#">
                                <i className="fa-regular fa-message-dots"></i>{" "}
                                (04) Coments
                              </a>
                            </span>
                            <span>
                              <i className="fa-light fa-eye"></i> 1,526 views
                            </span>
                          </div>

                          <h3 className="postbox__title mb-35">
                            <Link href="/blog-details">
                              Lavoratories used for scientic reseach take many
                              froms.
                            </Link>
                          </h3>
                          <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium,
                            aperiam ipsquae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo. Nemo
                            enim voluptatem voluptas sit aspernatur aut odit aut
                            fugit, sed quia consequuntur magni dolores eos qui
                            ratione voluptatem sequi nesciunt. Neque porro
                            quisquam est, qui dolorem ipsum quia dolor sit amet.
                          </p>
                          <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium,
                            aperiam ipsquae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="postbox__content-area mb-60">
                          <h4>Our Approach</h4>
                          <div className="postbox__text mb-30">
                            <p>
                              Must explain to you how all praising uts pain was{" "}
                              <br /> born and I will gives you a itself
                              completed <br /> account of the system, and sed
                              expounds the ut <br /> actual teachings of that
                              greater{" "}
                            </p>
                            <div className="postbox__text-list">
                              <ul>
                                <li>
                                  <i className="fa-solid fa-check"></i>
                                  Extramural Funding
                                </li>
                                <li>
                                  <i className="fa-solid fa-check"></i>Bacteria
                                  Markers
                                </li>
                                <li>
                                  <i className="fa-solid fa-check"></i>Nam nec
                                  mi euismod euismod
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="postbox__meta-img w-img mb-60">
                          <img
                            src="/assets/img/blog/blog-details-meta-03.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="postbox__content-area mb-40">
                          <h4 className="mb-25">
                            <Link href="/blog-details">
                              What Is A Business Technology Roadmap?
                            </Link>
                          </h4>
                          <p>
                            Unlike detailed blueprints that lay out all tasks,
                            deadlines, bug reports, and more along the way,
                            technology roadmaps are high-level visual summaries
                            highlighting a company’s vision or plans.
                          </p>
                          <p>
                            In an Agile approach, a technology roadmap feeds the
                            sprint and grooming processes, providing insight
                            into how the product will travel from start to
                            finish. It makes it easier for development teams to:
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="postbox__meta-img mb-60">
                          <img
                            src="/assets/img/blog/blog-details-meta-01.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="postbox__meta-img mb-60">
                          <img
                            src="/assets/img/blog/blog-details-meta-02.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="postbox__tag-border">
                      <div className="row align-items-center">
                        <div className="col-xl-7 col-md-12">
                          <div className="postbox__tag">
                            <div className="postbox__tag-list tagcloud">
                              <span>Tag</span>
                              <Link href="/blog">Covid-19</Link>
                              <Link href="/blog">Bacteria</Link>
                              <Link href="/blog">Medicine</Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-5 col-md-12">
                          <div className="postbox__social-tag">
                            <span>Share</span>
                            <a className="blog-d-lnkd" href="#">
                              <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a className="blog-d-pin" href="#">
                              <i className="fa-brands fa-pinterest"></i>
                            </a>
                            <a className="blog-d-fb" href="#">
                              <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a className="blog-d-tweet" href="#">
                              <i className="fa-brands fa-twitter"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                <div className="postbox__comment mb-65">
                  <h3 className="postbox__comment-title">(04) Comment</h3>
                  <ul>
                    <li>
                      <div className="postbox__comment-box d-flex">
                        <div className="postbox__comment-info">
                          <div className="postbox__comment-avater mr-25">
                            <img
                              src="/assets/img/blog/comments/comment-1.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="postbox__comment-text">
                          <div className="postbox__comment-name">
                            <h5>Kristin Watson</h5>
                            <span className="post-meta">MARCH 10, 2020</span>
                          </div>
                          <p>
                            Patient Comments are a collection of comments
                            submitted by viewers in response to <br /> a
                            question posed by a MedicineNet doctor.
                          </p>
                          <div className="postbox__comment-reply">
                            <a href="#">
                              <i className="fas fa-reply-all"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="children mb-30">
                      <div className="postbox__comment-box d-flex">
                        <div className="postbox__comment-info">
                          <div className="postbox__comment-avater mr-25">
                            <img
                              src="/assets/img/blog/comments/comment-2.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="postbox__comment-text">
                          <div className="postbox__comment-name">
                            <h5>Brooklyn Simmons</h5>
                            <span className="post-meta">MARCH 10, 2020</span>
                          </div>
                          <p>
                            Include anecdotal examples of your experience, or
                            things you took notice of that you <br /> feel
                            others would find useful.
                          </p>
                          <div className="postbox__comment-reply">
                            <a href="#">
                              <i className="fas fa-reply-all"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <CommentForm />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-12">
              <div className="sidebar__wrapper pl-25 pb-50">
                <BlogSearch />
                <Category />
                <RecentPost />
                <Tags />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostBoxDetails;
