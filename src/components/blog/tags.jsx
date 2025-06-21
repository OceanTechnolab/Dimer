import Link from "next/link";
import React from "react";

//  tags data
const tags = [
  { name: "Covid-19" },
  { name: "Gene" },
  { name: "Test" },
  { name: "Lab" },
  { name: "data" },
  { name: "Virus" },
  { name: "Pandemic" },
  { name: "Symptoms" },
  { name: "Medicine" },
  { name: "Bacteria" },
];

const Tags = () => {
  return (
    <>
      <div className="sidebar__widget mb-55">
        <h3 className="sidebar__widget-title mb-25">Popular Tag</h3>
        <div className="sidebar__widget-content">
          <div className="tagcloud">
            {tags.map((tag, i) => (
              <Link key={i} href="/blog-details">
                {tag.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tags;
