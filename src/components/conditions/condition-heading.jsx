import Link from "next/link";
import React from "react";


const Conditionheading = () => {
  return (
    <>
      <section className="team-details-area pt-10 pb-70">
        <div className="container">
          <div className="row">
              <div className="tp-team-dtls__content mt-50 mb-50">
                <h4 className="tp-team-dtls__title mb-10">
                  <a>Acceptance of Terms</a>
                </h4>
                <p>
                  By using this website, you acknowledge and accept the terms outlined in our Privacy Policy Agreement. 
                  If you do not assent to our terms and conditions, you must immediately terminate your use of our website. 
                  By continuing to use our website after updates or changes to our terms and conditions, you acknowledge and
                  agree to be bound by such revisions.
                </p>
                <h4 className="tp-team-dtls__title mb-10">
                  <a>How to Contact Us</a>
                </h4>
                <p>
                  If you have any questions or concerns regarding the Privacy Policy Agreement related to our website, please feel 
                  free to contact us at the following email or telephone number.
                </p>
                <h4 className="tp-team-dtls__title mb-10">
                  <a>Cookies</a>
                </h4>
                <p>
                  Dimer utilizes cookies. By accessing our website, you consent to their use in accordance with our Privacy Policy.
                    <br />
                Like most interactive websites, we utilize cookies to store and retrieve user information, enhancing your browsing 
                experience.Our website uses cookies to enhance your experience by enabling key features. Additionally, our affiliat
                 and advertising partners may also utilize cookies.
                </p>
              </div>
                <div className="tp-team-for">
                <p>
               <strong>Email</strong>:{' '}
                <a href="mailto:Info@dimerscientific.com.hostingersite.com">
                  Info@dimerscientific.com
                </a>
              </p>
              </div>
              <div className="number">
              <p>
                 <strong>Contact Number</strong>:{' '}
                  <a href="tel:+916358818151">+91 6358848151</a>
              </p>
              </div>
                </div>  
          </div>
      </section>
    </>
  );
};

export default Conditionheading;