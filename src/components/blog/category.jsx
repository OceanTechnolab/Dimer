import Link from "next/link";
import React from "react";

// category_data
const category_data = [
  {
    category: "Chemistry",
    blog_item: "03",
  },
  {
    category: "Forensic science",
    blog_item: "07",
  },
  {
    category: "Gemological",
    blog_item: "09",
  },
  {
    category: "COvid Analysis",
    blog_item: "01",
  },
  {
    category: "Becteriology",
    blog_item: "00",
  },
  {
    category: "Angiosperm",
    blog_item: "26",
  },
];

const Category = () => {
  return (
    <>
      <div className="sidebar__widget mb-40">
        <h3 className="sidebar__widget-title mb-25">Category</h3>
        <div className="sidebar__widget-content">
          <ul>
            {category_data.map((item, i) => (
              <li key={i}>
                <Link href="/blog-details">
                  {item.category}
                  <span>{item.blog_item}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Category;
