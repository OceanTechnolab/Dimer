import VideoPopup from '@/modals/video-popup';
import React, { useState } from 'react';

const ProjectDetailsArea = () => {

  const [isVideoOpen, setIsVideoOpen] = useState(false);
    
    return (
      <>
        <section className="project-area pt-125 pb-35">
          <div className="container">
            <div className="row mb-40">
              <div className="col-lg-6 col-md-6">
                <div
                  className="tpoverview mb-60 wow fadeInLeft"
                  data-wow-delay=".2s"
                >
                  <h5 className="tpproject-title mb-50">Project Overview</h5>
                  <p>
                    Client:<span> Rasalina De Willam (USA)</span>
                  </p>
                  <p>
                    Date:<span> March 21, 2020</span>
                  </p>
                  <p>
                    Category:<span> Laboratory & Science Research</span>
                  </p>
                  <div className="tpoverview__social pt-30">
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a className="tpover-social-prn" href="#">
                      <i className="fa-brands fa-pinterest-p"></i>
                    </a>
                    <a className="tpover-social-tweet" href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a className="tpover-social-tube" href="#">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div
                  className="tpviewtext mb-60 wow fadeInRight"
                  data-wow-delay=".2s"
                >
                  <p className="tpviewtext__para">
                    When faced with a supply chain disruption, proactive and
                    reactive supply chain risk management can in fact make or
                    break a company’s existence. One of the most famous (or
                    rather infamous) cases is the fire at the Philips microchip
                    plant in Albuquerque, New Mexico, in 2000, which
                    simultaneously affected both Noki and Ericsson. However,
                    both companies took a very different approach toward the
                    incident, and in hindsight,
                  </p>
                  <p>
                    Clearly displayed how to and how not to handle supply chain
                    disruptions. New Mexico, in 2000, which simultaneously
                    affected both Nokia and Ericsson
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div
                  className="tpprothumb mb-120 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <img
                    src="/assets/img/gallery/project-01.jpg"
                    alt="projrct-thumb"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div
                  className="tpprosolution mb-40 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <h5 className="tpproject-title mb-50">
                    Challenge & Solution
                  </h5>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div
                  className="tpprosolution pb-40 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <p>
                    Being a top us private facility for any kind of scientific
                    research, we are proud of the overall amount of work we`ve
                    done so far. Excepteur sint occaecat cupidatat non dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                  <p>
                    When faced with a supply chain disruption, proactive and
                    reactive supply chain risk management can in fact make or
                    break a company’s existence. One of the most famous (or
                    rather infamous) cases is the fire at the Philips microchip
                    plant in Albuquerque, New Mexico, in 2000, which
                    simultaneously affected both Nokia and Ericsson. However,
                    both companies took a very different approach toward the
                    incident, and in hindsight.
                  </p>
                  <p>
                    Clearly displayed how to and how not to handle supply chain
                    disruptions. New Mexico, in 2000, which simultaneously
                    affected both Nokia and Ericsson
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div
                  className="tpprovideo p-relative mb-115 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <img
                    src="/assets/img/gallery/project-02.jpg"
                    alt="projrct-thumb-video"
                  />
                  <button
                    onClick={() => setIsVideoOpen(true)}
                    className="play-btn popup-video"
                  >
                    <i className="fas fa-play"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div
                  className="tpprosolution mb-40 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <h5 className="tpproject-title mb-40">Our Process</h5>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div
                  className="tpprosolution pb-30 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <p>
                    Being a top us private facility for any kind of scientific
                    research, we are proud of the overall amount of work we`ve
                    done so far. Excepteur sint occaecat cupidatat non dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                  <p>
                    When faced with a supply chain disruption, proactive and
                    reactive supply chain risk management can in fact make or
                    break a company’s existence. One of the most famous (or
                    rather infamous) cases is the fire at the Philips microchip
                    plant in Albuquerque, New Mexico, in 2000, which
                    simultaneously affected both Nokia and Ericsson. However,
                    both companies took a very different approach toward the
                    incident, and in hindsight.
                  </p>
                  <p>
                    Clearly displayed how to and how not to handle supply chain
                    disruptions. New Mexico, in 2000, which simultaneously
                    affected both Nokia and Ericsson
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <VideoPopup
          isVideoOpen={isVideoOpen}
          setIsVideoOpen={setIsVideoOpen}
          videoId={"d8w5SICzzxc"}
        />
        {/* video modal end */}
      </>
    );
};

export default ProjectDetailsArea;