import React from "react";
//import "./ImageConsole.css"; // make sure this file has the updated styles

const ImageConsole = () => {
  const images = [
    "/assets/img/logos/brand1.webp",
    "/assets/img/logos/brand2.webp",
    "/assets/img/logos/brand3.webp",
    "/assets/img/logos/brand4.webp",
    "/assets/img/logos/brand5.webp",
    "/assets/img/logos/brand6.webp",
    "/assets/img/logos/brand7.webp",
    "/assets/img/logos/brand8.webp",
    "/assets/img/logos/brand9.webp",
    "/assets/img/logos/brand10.webp",
    "/assets/img/logos/brand11.webp",
    "/assets/img/logos/brand12.webp",
    "/assets/img/logos/brand13.webp",
    "/assets/img/logos/brand14.webp",
    "/assets/img/logos/brand15.webp",
    "/assets/img/logos/brand16.webp",
    "/assets/img/logos/brand17.webp",
    "/assets/img/logos/brand18.webp",
    "/assets/img/logos/brand19.webp",
    "/assets/img/logos/brand20.webp",
  ];

  // Duplicate the image list for seamless looping
  const scrollingImages = [...images, ...images];

  return (
    <div className="console-container">
      <h2 className="console-heading">Our Happy Customers</h2>
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {scrollingImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Image-${index}`}
              className="marquee-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageConsole;
