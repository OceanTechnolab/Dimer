// const menu_data = [
//   {
//     id: 1,
//     mega_menu: true,
//     has_dropdown: false,
//     title: "Home",
//     link: "/",
//     active: "active",
//     // sub_menus: [
//     //   { link: "/", title: "Home Style 1" },
//     //   { link: "/home-2", title: "Home Style 2" },
//     //   { link: "/home-3", title: "Home Style 3" },
//     // ],
//   },
//   {
//     id: 2,
//     mega_menu: false,
//     has_dropdown: true,
//     title: "Pages",
//     link: "/about",
//     active: "",
//     sub_menus: [
//       { link: "/about", title: "About" },
//       { link: "/team-1", title: "Team 01" },
//       { link: "/team-2", title: "Team 02" },
//       { link: "/team-details", title: "Team Details" },
//       { link: "/pricing-plan", title: "Pricing Plan" },
//       { link: "/product-details", title: "Product Details" },
//       { link: "/project-details", title: "Project Details" },
//       { link: "/faq", title: "FAQ's" },
//     ],
//   },
//   {
//     id: 3,
//     mega_menu: false,
//     has_dropdown: true,
//     title: "Service",
//     link: "/service",
//     active: "",
//     sub_menus: [
//       { link: "/service", title: "Service 1" },
//       { link: "/service-2", title: "Service 2" },
//       { link: "/service-3", title: "Service 3" },
//       { link: "/coa", title: "COA" },
//       { link: "/service-details", title: "Service Details" },
//     ],
//   },
//   {
//     id: 4,
//     mega_menu: false,
//     has_dropdown: false,
//     title: "Research",
//     link: "/research",
//     active: "",
//   },
//   {
//     id: 5,
//     mega_menu: false,
//     has_dropdown: true,
//     title: "Blog",
//     link: "/blog",
//     active: "",
//     sub_menus: [
//       { link: "/blog", title: "Blog" },
//       { link: "/blog-details", title: "Blog Details" },
//     ],
//   },
//   {
//     id: 6,
//     mega_menu: false,
//     has_dropdown: false,
//     title: "Contact",
//     link: "/contact",
//     active: "",
//   },
// ];
// export default menu_data;

const menu_data = [
  {
    id: 1,
    mega_menu: true,
    has_dropdown: false,
    title: "Home",
    link: "/",
    active: "active",
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "About Us",
    link: "/about",
    active: ""
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "Products",
    link: "/service",
    active: "",
    sub_menus: [
      {
        link: "/service",
        title: "Analytical Solvents",
        has_dropdown: true,
        sub_menus: [
          { link: "/gc-hs", title: "GC-HS Solvents" },
          { link: "/lc-ms", title: "LC-MS Solvents" },
          { link: "/hplc", title: "HPLC Solvents" },
          { link: "/ion-pairing", title: "Ion Pairing Reagents" },
          { link: "/bile-salts", title: "Bile Salts & SLS" }
        ]
      },
      {
        link: "/gc-reference-standards",
        title: "GC reference standards",
        has_dropdown: false
      },
      {
        link: "/service-3",
        title: "Specialty chemicals",
        has_dropdown: true,
        sub_menus: [
          { link: "/buffers", title: "Biological Buffers" },
          { link: "/building-blocks", title: "Building Blocks" },
          { link: "/solar", title: "Solar Chemicals" },
          { link: "/battery", title: "Battery Materials" }
        ]
      },
    ],
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    title: "Manufacturing",
    link: "/research",
    active: "",
  },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: true,
    title: "Resources ",
    link: "/blog",
    active: "",
    sub_menus: [
      { link: "/blog", title: "Product literature" },
      { link: "/coa", title: "COA" },
      { link: "/certificates", title: "Certificates " },
      { link: "/periodic-table", title: "Periodic table " },
       { link: "/label-identification", title: "Label Identification Guide" },
      { link: "/blog-details", title: "Terms & conditions" },
      { link: "/blog-details", title: "Applications " },
      { link: "/blog-details", title: "Custom synthesis" },
      { link: "/blog-details", title: "Career " },
    ],
  },
  {
    id: 6,
    mega_menu: false,
    has_dropdown: true,
    title: "Gallery",
    link: "/contact",
    active: "",
    sub_menus: [
      { link: "/blog", title: "Events" },
      { link: "/coa", title: "Exhibitions " },
      { link: "/blog-details", title: "Road Show" },
      { link: "/blog-details", title: "CSR Activities" },
    ],
  },
];
export default menu_data;
