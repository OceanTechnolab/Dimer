const pricing_data = [
  {
    id: 1,
    color: "",
    title: "Basic Care",
    price: 89,
    time: "monthly",
    sub_title: "Basic Health Check",
    class: "",
    btn_color: "",
    price_features: [
      { active: "", list: "Complete Blood Count" },
      { active: "", list: "Liver Function Blood Test" },
      { active: "", list: "Heart Disease Blood Tests" },
      { active: "tp-price__inactive", list: "Cholesterol / Lipid Levels" },
      { active: "tp-price__inactive", list: "Sexually Transmitted Diseases" },
      { active: "tp-price__inactive", list: " Male / Female General Health" },
    ],
  },

  {
    id: 2,
    color: "tp-pink-btn",
    title: "Essential Care",
    price: 149,
    time: "monthly",
    sub_title: "Gold Health Check",
    class: "active more-services-price",
    btn_color: "tp-pink-btn",

    price_features: [
      { active: "", list: "Complete Blood Count" },
      { active: "", list: "Liver Function Blood Test" },
      { active: "", list: "Heart Disease Blood Tests" },
      { active: "tp-price__inactive", list: "Cholesterol / Lipid Levels" },
      { active: "tp-price__inactive", list: "Sexually Transmitted Diseases" },
      { active: "tp-price__inactive", list: "Male / Female General Health" },
      { active: "tp-price__inactive", list: "Sexually Transmitted Diseases" },
    ],
  },

  {
    id: 3,
    color: "tp-pink-btn",
    title: "Essential Care",
    price: 249,
    time: "yearly",
    sub_title: "Platinum Health Check",
    class: "tp-yearly-price",
    btn_color: "tp-green-btn",

    price_features: [
      { active: "", list: "Complete Blood Count" },
      { active: "", list: "Liver Function Blood Test" },
      { active: "", list: "Heart Disease Blood Tests" },
      { active: "tp-price__inactive", list: "Cholesterol / Lipid Levels" },
      { active: "tp-price__inactive", list: "Sexually Transmitted Diseases" },
      { active: "tp-price__inactive", list: "Male / Female General Health" },
    ],
  },
];
export default pricing_data;
