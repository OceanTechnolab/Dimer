import React from "react";

const CommentForm = () => {
  return (
    <>
      <div className="postbox__comment-form">
        <h3 className="postbox__comment-form-title">Leave a Reply</h3>
        <p>
          Your email address will not be published. Required fields are marked *
        </p>
        <form onSubmit={e => e.preventDefault()}>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="postbox__comment-input">
                <input type="text" placeholder="Enter your Name" />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="postbox__comment-input">
                <input type="email" placeholder="Enter your email" />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="postbox__comment-input">
                <input type="text" placeholder="Enter your number" />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="postbox__comment-input">
                <input type="text" placeholder="Enter your website" />
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="postbox__comment-input">
                <textarea placeholder="Type your comment"></textarea>
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="postbox__comment-btn">
                <button type="submit" className="tp-btn">
                  Post Comment
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CommentForm;
