import React from "react";


const Labelheading = () => {

  //const [isVideoOpen, setIsVideoOpen] = useState(false);
    
    return (
      <>
        <section className="infor-area mb-125 ll-35">
          <div className="container">
            <div className="row">
                <div
                  //className="tpprosolution pb-40 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <h2 className="label-heading">HANDLING, USAGE & STORAGE</h2>
                 <div className="label-points-section mb-55">
                  <ul className="label-points-list">
                     <li>
                     <i className="fa-solid fa-circle"></i>
                         Read the label and check for the product that it’s the one which is required.
                         </li>
                         <li>
                         <i className="fa-solid fa-circle"></i>
                             Use appropriate protective clothing and equipment while extracting the product from bottle and avoid risk of inhalation, ingestion and contact with skin, eyes & clothing.
                         </li>
                         <li>
                             <i className="fa-solid fa-circle"></i>
                                 Use clean apparatus and equipments after opening the container and close the container tightly after use.
                        </li>
                         <li>
                             <i className="fa-solid fa-circle"></i>
                                 Storage temperature is mentioned below the labels for every product.
                         </li>
                        <li>
                             <i className="fa-solid fa-circle"></i>
                             All materials should be stored in dry, well ventilated area.
                         </li>
                        </ul>
                </div>

                </div>
              </div>
            </div>
        </section>

      </>
    );
};

export default Labelheading;
