// src/components/common/Breadcrumb.jsx
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

// Optional: map clean names
const breadcrumbMap = {
  "about-us": "About Us",
  "contact": "Contact",
  "products": "Products",
  "services": "Services",
  "faq": "FAQ",
};

const Breadcrumb = () => {
  const router = useRouter();
  const pathParts = router.pathname.split("/").filter(Boolean);

  return (
    <div className="bg-green-200 px-5 py-2 text-base font-medium">
      <Link href="/">
        <a className="text-gray-800 font-semibold hover:underline">Home</a>
      </Link>
      {pathParts.map((part, index) => {
        const path = "/" + pathParts.slice(0, index + 1).join("/");
        const name = breadcrumbMap[part] || part.replace(/-/g, " ");
        return (
          <span key={index}>
            <span className="mx-2 text-gray-500">›</span>
            <Link href={path}>
              <a className="text-gray-800 capitalize">{name}</a>
            </Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
