import team_data from "@/data/team";
import Link from "next/link";
import React from "react";

const TeamArea = () => {
  return (
    <>
      <section className="team-area pt-125 pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 col-12">
              <div className="tp-section text-center">
                <span className="tp-section__sub-title left-line right-line mb-25">
                  Our Team
                </span>
                <h3 className="tp-section__title mb-75">Our Specialist</h3>
              </div>
            </div>
          </div>
          <div className="row">
            {team_data.map((item) => (
              <div key={item.id} className="col-xl-4 col-md-6">
                <div
                  className="tp-team mb-50 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="tp-team__thumb fix">
                    <Link href="#">
                      <img src={item.img} alt="team-thumb" />
                    </Link>
                  </div>
                  <div className="tp-team__content">
                    <h4 className="tp-team__title mb-15">
                      <Link href="/team-details">{item.name}</Link>
                    </h4>
                    <span className="tp-team__position mb-30">
                      {item.title}
                    </span>
                    <p>{item.des} </p>
                    <div className="tp-team__social">
                      {item.social_links.map((link, i) => (
                        <Link
                          key={i}
                          className={link.color}
                          href={link.link}
                          target={link.target}
                        >
                          <i className={link.icon}></i>
                        </Link>
                      ))}
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

export default TeamArea;
