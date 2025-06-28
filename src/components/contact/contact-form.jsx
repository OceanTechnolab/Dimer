import Link from "next/link";
import React from "react";
import ContactUs from "../forms/contact-us";

// Updated contact_info
const contact_info = {
  address: (
    <>
      229, 2nd Floor, SWC hub,
      <br />
      Vasna - Bhayli Main Rd,
      <br />
      opp. Rajpath Complex, Bhayli,
      <br />
      Vadodara, Gujarat - 391410
    </>
  ),
  phone_1: "+91 6358848151",

  // Updated: replaced "open" with email
  open: (
    <>
      <a href="mailto:Info@dimerscientific.com">Info@dimerscientific.com</a>
    </>
  ),
};

const { address, phone_1, phone_2, open } = contact_info;

const ContactForm = () => {
  return (
    <>
      <section className="contact-area pt-130 pb-115">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-md-5 col-12 wow fadeInLeft"
              data-wow-delay=".4s"
            >
              {/* Address */}
              <div
                className="tpcontact mr-60 mb-60 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="tpcontact__item text-center">
                  <div className="tpcontact__icon mb-20">
                    <img src="/assets/img/icon/contact-01.svg" alt="" />
                  </div>
                  <div className="tpcontact__address">
                    <h4 className="tpcontact__title mb-15">Address line</h4>
                    <span>
                      <Link href="/contact">{address}</Link>
                    </span>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div
                className="tpcontact mr-60 mb-60 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="tpcontact__item text-center">
                  <div className="tpcontact__icon mb-20">
                    <img src="/assets/img/icon/contact-02.svg" alt="" />
                  </div>
                  <div className="tpcontact__address">
                    <h4 className="tpcontact__title mb-15">Phone Number</h4>
                    <span>
                      <a href={`tel:${phone_1}`}>{phone_1}</a>
                    </span>
                    {phone_2 && (
                      <span>
                        <a href={`tel:${phone_2}`}>{phone_2}</a>
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div
                className="tpcontact mr-60 mb-60 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="tpcontact__item text-center">
                  <div className="tpcontact__icon mb-20">
                    <img
                      src="/assets/img/icon/contact-03.svg"
                      alt="Email Icon"
                    />
                  </div>
                  <div className="tpcontact__address">
                    <h4 className="tpcontact__title mb-15">Email Address</h4>
                    <span>{open}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-8 col-md-7 col-12">
              <div className="contactform wow fadeInRight" data-wow-delay=".4s">
                <h4 className="contactform__title mb-35">
                  Send us a Message :
                </h4>
                <ContactUs />

                <div className="row">
                  <div className="col-lg-12">
                    <div className="tpcontactmap">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.9385356651035!2d73.1317730752043!3d22.7344161263676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8b8d0b5f85f%3A0xef93093c8968e865!2sSWC%20Hub%2C%20229%2C%20Vasna%20-%20Bhayli%20Main%20Rd%2C%20opp.%20Rajpath%20Complex%2C%20Bhayli%2C%20Vadodara%2C%20Gujarat%20391410!5e0!3m2!1sen!2sin!4v1719333496035!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
