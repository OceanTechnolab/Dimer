import answer_question_data from "@/data/answer-question-data";
import React from "react";

const AnswerQuestion = () => {
  return (
    <>
      <div className="faq-accordion">
        <div className="accordion" id="accordionExample">
          {answer_question_data.map((item) => (
            <div key={item.id} className="accordion-items">
              <h2 className="accordion-header" id={item.accordion_id}>
                <button
                  className={`accordion-button ${item.collapsed}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={item.data_bs_target}
                  aria-expanded={item.aria_expanded}
                  aria-controls={item.aria_controls}
                >
                  {item.question}
                </button>
              </h2>
              <div
                id={item.aria_controls}
                className={`accordion-collapse collapse ${item.show}`}
                aria-labelledby={item.accordion_id}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-content">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AnswerQuestion;
