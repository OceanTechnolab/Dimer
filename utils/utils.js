// export const animationCreate = () => {
//   if (typeof window !== "undefined") {
//     window.WOW = require("wowjs");
//   }
//   new WOW.WOW({ live: false }).init();
// };

export const animationCreate = async () => {
  if (typeof window !== "undefined") {
    const module = await import("wowjs/dist/wow.js");
    const WOW = module.default;
    if (typeof WOW === "function") {
      new WOW({ live: false }).init();
    } else {
      console.error("WOW is not a function:", WOW);
    }
  }
};
