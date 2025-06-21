import AnswerQuestion from '@/common/answer-question';
import React from 'react';

const FaqArea = () => {
    return (
        <>
            <section className="faq-area pt-125 pb-100">
            <div className="container">
               <div className="row text-center">
                  <div className="col-lg-12 col-md-12 col-12">
                     <div className="tp-section">
                        <span className="tp-section__sub-title left-line right-line mb-20">Faq</span>
                        <h3 className="tp-section__title mb-70">General Question</h3>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-lg-12">
                     <AnswerQuestion />
                  </div>
               </div>
            </div>
         </section>
        </>
    );
};

export default FaqArea;