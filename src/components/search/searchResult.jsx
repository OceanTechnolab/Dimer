import React, { useMemo } from "react";
import { useRouter } from "next/router";
import article_data from "../../data/article-data";
import DataTable from "../../common/DataTable";

const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
    sortable: false,
    grow: 2,
  },
  {
    name: "Author",
    selector: (row) => row.user,
    sortable: false,
  },
  {
    name: "Date",
    selector: (row) => row.date,
    sortable: false,
  },
];

const flattenText = (val) => {
  if (typeof val === "string") return val;
  if (
    typeof val === "object" &&
    val !== null &&
    val.props &&
    val.props.children
  ) {
    return Array.isArray(val.props.children)
      ? val.props.children.join(" ")
      : val.props.children;
  }
  return "";
};

const SearchResult = () => {
  const router = useRouter();
  const { q } = router.query;
  const searchQuery = (q || "").toString().toLowerCase();

  const filteredData = useMemo(() => {
    if (!searchQuery) return article_data;
    return article_data.filter((item) => {
      return (
        (item.title && item.title.toLowerCase().includes(searchQuery)) ||
        (item.user && item.user.toLowerCase().includes(searchQuery)) ||
        (item.date && item.date.toLowerCase().includes(searchQuery)) ||
        (item.des && flattenText(item.des).toLowerCase().includes(searchQuery))
      );
    });
  }, [searchQuery]);

  return (
    <div className="container py-5">
      <h2 className="mb-4">Search Results{searchQuery && ` for "${q}"`}</h2>
      {filteredData.length > 0 ? (
        <DataTable columns={columns} data={filteredData} />
      ) : (
        <div className="alert alert-warning">No results found.</div>
      )}
    </div>
  );
};

export default SearchResult;
