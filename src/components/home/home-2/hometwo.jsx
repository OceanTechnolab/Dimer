// import Brands from "@/common/brands";
// import Counter from "@/common/counter";
// import React from "react";
// import About from "./about";
// import Appointment from "./appointment";
// import Choose from "./choose";
// import Gallery from "./gallery";
// import HeroBanner from "./hero-banner";
// import NewsLetter from "./news-letter";
// import Service from "./service";
// import Team from "./team";
// import Testimonial from "../../../common/testimonial";
// import Blog from "./blog";
// import HeaderTwo from "@/layout/header/header-two";

// const HomeTwo = () => {
//   return (
//     <>
//       <HeroBanner />
//       <About />
//       <Service />
//       <Gallery />
//       <Counter cls="pt-80 pb-100" />
//       <Choose />
//       <Appointment />
//       <Brands border_style={true} />
//       <Team />
//       <Testimonial bg_img={true} />
//       <Blog />
//       <NewsLetter />
//     </>
//   );
// };

// export default HomeTwo;


// new

import Brands from "@/common/brands";
import Counter from "@/common/counter";
import React from "react";
import About from "./about";
import Appointment from "./appointment";
import Choose from "./choose";
import Gallery from "./gallery";
import HeroBanner from "./hero-banner";
import NewsLetter from "./news-letter";
import Service from "./service";
import Team from "./team";
import Testimonial from "../../../common/testimonial";
import Blog from "./blog";
import HeaderTwo from "@/layout/header/header-two";
import Clients from "./clients";
import { Milestone } from "lucide-react";
import MilestoneAndCertificate from "./milestoneAndCertificate";
import Mission from "./mission";

const HomeTwo = () => {
  return (
    <>
      <HeroBanner />
      <Clients/>
      <About />
      <Service />
      {/* <Gallery /> */}
      <Mission/>
      <MilestoneAndCertificate/>
      <Choose />
      <Counter cls="pt-80 pb-100" />
      <Appointment />
      {/* <Brands border_style={true} /> */}
      {/* <Team /> */}
      {/* <Testimonial bg_img={true} /> */}
      {/* <Blog /> */}
      {/* <NewsLetter /> */}
    </>
  );
};

export default HomeTwo;
