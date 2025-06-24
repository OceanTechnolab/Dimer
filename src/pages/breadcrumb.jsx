// src/components/common/Breadcrumb.jsx
import React from "react";
import { useLocation, Link } from "react-router-dom";

// Optional: map clean names
const breadcrumbMap = {
  "about-us": "About Us",
  "contact": "Contact",
  "products": "Products",
  "services": "Services",
  "faq": "FAQ",
};

const Breadcrumb = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);

  return (
    <div className="bg-green-200 px-5 py-2 text-base font-medium">
      <Link to="/" className="text-gray-800 font-semibold hover:underline">
        Home
      </Link>
      {pathParts.map((part, index) => {
        const path = "/" + pathParts.slice(0, index + 1).join("/");
        const name = breadcrumbMap[part] || part.replace(/-/g, " ");
        return (
          <span key={index}>
            <span className="mx-2 text-gray-500">›</span>
            <Link to={path} className="text-gray-800 capitalize">
              {name}
            </Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
