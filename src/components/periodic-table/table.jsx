import React, { useState } from 'react';

const Table = () => {

  const [isVideoOpen, setIsVideoOpen] = useState(false);
    
    const team_data = [
      {
        id: 1,
        name: "118 elements",
        des: "The periodic table consists of 118 known chemical elements.",
      },
      {
        id: 2,
        name: "7 periods",
        des: "Elements are arranged in 7 periods (rows) by increasing atomic number.",
      },
      {
        id: 3,
        name: "18 groups",
        des: "Elements are grouped into 18 columns based on similar properties.",
      }
    ];

    return (
      <>

      <section className="project-area pt-10 pr-200">
        <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
          <div
            className="tpprothumb wow fadeInUp"
            data-wow-delay=".2s"
          >
            <img
            src="/assets/img/periodic-Table.webp"
            alt="projrct-thumb"
            />
          </div>
          </div>
        </div>
        </div>
      </section>

      <section className="team-area  pb-30">
        <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12 col-12">
          <div className="tp-section text-center">
            <h3 className="tp-section__title mb-30">Explore the Periodic Table</h3>
            <p>The periodic table is a tabular display of the chemical elements. It is organized on basis of increasing
              atomic number, electron configuration, and recurring chemical properties.</p>
          </div>
          </div>
        </div>
        <div className="row">
          {team_data.map((item) => (
          <div key={item.id} className="col-xl-4 col-md-6">
            <div
            className={`tp-team mb-50 wow fadeInUp ${item.id === 2 ? 'highlight-box' : ''}`}
            data-wow-delay=".6s"
            >
            <div className="tp-team__thumb fix">
              {/* No image imported or used here */}
            </div>
            <div className="tp-team__content">
              <h4 className="tp-team__title mb-15">
              <a href="/team-details">{item.name}</a>
              </h4>
              <span className="tp-team__position mb-30">
              {item.title}
              </span>
              <p>{item.des}</p>
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

export default Table;
