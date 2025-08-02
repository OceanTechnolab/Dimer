// import React from "react";

// const ContactUs = () => {
//   return (
//     <>
//       <div className="contactform__list mb-60">
//         <form onSubmit={e => e.preventDefault()} id="contact-form" method="post">
//           <div className="row">
//             <div className="col-lg-6">
//               <div className="contactform__input mb-30">
//                 <input name="name" type="text" placeholder="Enter your Name" />
//               </div>
//             </div>
//             <div className="col-lg-6">
//               <div className="contactform__input mb-30">
//                 <input
//                   name="email"
//                   type="email"
//                   placeholder="Enter your mail"
//                 />
//               </div>
//             </div>
//             <div className="col-lg-6">
//               <div className="contactform__input mb-30">
//                 <input
//                   name="number"
//                   type="text"
//                   placeholder="Enter your number"
//                 />
//               </div>
//             </div>
//             <div className="col-lg-6">
//               <div className="contactform__input mb-30">
//                 <input
//                   name="website"
//                   type="text"
//                   placeholder="Enter your website"
//                 />
//               </div>
//             </div>
//             <div className="col-lg-12">
//               <div className="contactform__input mb-30">
//                 <textarea
//                   name="message"
//                   placeholder="Type your comment"
//                 ></textarea>
//               </div>
//             </div>
//             <div className="col-lg-12">
//               <div className="contactform__input mb-30-btn">
//                 <button type="submit" className="tp-btn">
//                   Send Massage
//                 </button>
//               </div>
//               <p className="ajax-response"></p>
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default ContactUs;

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_du5gvyk", // <-- replace with your real service ID
        "template_70royx5", // <-- replace with your real template ID
        form.current,
        "l4N72tD6lRQFr2f51" // <-- replace with your real public key
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          toast.success("Your message has been sent successfully!");
          console.log("toast");
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          toast.error("Failed to send message. Please try again.");
          console.log("toast error");
        }
      );
  };

  return (
    <>
      <ToastContainer />
      <div className="contactform__list mb-60">
        <form ref={form} onSubmit={sendEmail} id="contact-form" method="post">
          <div className="row">
            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <input
                  name="user_name"
                  type="text"
                  placeholder="Enter your Name"
                  required
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <input
                  name="user_email"
                  type="email"
                  placeholder="Enter your mail"
                  required
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <input
                  name="user_number"
                  type="text"
                  placeholder="Enter your number"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <input
                  name="user_website"
                  type="text"
                  placeholder="Enter your website"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="contactform__input mb-30">
                <textarea
                  name="message"
                  placeholder="Type your comment"
                  required
                ></textarea>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="contactform__input mb-30-btn">
                <button type="submit" className="tp-btn">
                  Send Message
                </button>
              </div>
              <p className="ajax-response"></p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
