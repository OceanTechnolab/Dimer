import React from "react";

const BlogSearch = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="sidebar__widget mb-45">
        <div className="sidebar__widget-content">
          <h3 className="sidebar__widget-title mb-25">Search</h3>
          <div className="sidebar__search">
            <form action="#" onSubmit={handelSubmit}>
              <div className="sidebar__search-input-2 p-relative">
                <input type="text" placeholder="Search post" />
                <button type="submit">
                  <i className="far fa-search"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSearch;
