import Link from "next/link";
import React from "react";

const Agreement = () => {
  return (
    <>
      <section className="team-details-area pt-50 pb-10">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div className="tp-team-dtls__thumb mb-50 ">
                <img
                  src="/assets/img/team/form.webp"
                  alt="team-thumb"
                />
              </div>
            </div>
            <div className="col-md-6 col-mb-6">
              <div className="tp-team-dtls__conten pl-0 mb-10">
                <h1 className="tp-team-dtls__title mb-10">
                  <a className="tital-agreement">Confidentiality Agreement (NDA)</a>
                </h1>
               <div className="agreement">
                  <p className="agreement-text">
                    Dimer is willing to sign a conﬁdentiality agreement (NDA) to develop and provide custom-made, hard-to-ﬁnd chemicals 
                    compounds based on your speciﬁc needs and intended use, ensuring that the details of the compound remain conﬁdential throughout the process.
                  </p>
                  <p className="agreement-text">
                    Dimer is open to discussing and adapting their product details, including quality standards, packaging methods, 
                    labeling design, testing procedures, analysis protocols, and delivery timelines, to meet the speciﬁc needs of each customer.
                    The availability of their technical team for expert guidance and support throughout the process is also a signiﬁcant value-add, 
                    providing customers with peace of mind and ensuring a smooth collaboration.
                  </p>
                  <p className="agreement-text">
                    Due to our consistent quality, robust product portfolio, reliable service, timely delivery, reasonable pricing, customer-friendly 
                    approach, today Dimer brand products have achieved a respectable & reliable place in the industry across the globe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Agreement;