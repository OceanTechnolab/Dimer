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

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID',     // <-- replace with your real service ID
      'YOUR_TEMPLATE_ID',    // <-- replace with your real template ID
      form.current,
      'YOUR_PUBLIC_KEY'      // <-- replace with your real public key
    )
    .then((result) => {
        console.log('SUCCESS!', result.text);
        alert('Your message has been sent successfully!');
        form.current.reset();
    }, (error) => {
        console.error('FAILED...', error.text);
        alert('Failed to send message. Please try again.');
    });
  };

  return (
    <>
      <div className="contactform__list mb-60">
        <form ref={form} onSubmit={sendEmail} id="contact-form" method="post">
          <div className="row">
            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <input name="user_name" type="text" placeholder="Enter your Name" required />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <input name="user_email" type="email" placeholder="Enter your mail" required />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <input name="user_number" type="text" placeholder="Enter your number" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <input name="user_website" type="text" placeholder="Enter your website" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="contactform__input mb-30">
                <textarea name="message" placeholder="Type your comment" required></textarea>
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
