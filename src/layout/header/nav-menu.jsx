import Link from "next/link.js";
import React from "react";
import menu_data from "./menu-data.js";

const NavMenu = ({num=false}) => {
  return (
    <>
      <ul>
        {menu_data.map((menu, index) =>
          menu.has_dropdown ? (
            <li key={menu.id} className="has-dropdown">
              <Link className={`${menu?.active}`} href={menu.link}>
                {num && index <= 9
                  ? `0${index + 1 + "."}`
                  : num && index + 1 + "."}
                {menu.title}
              </Link>
              {menu.has_dropdown && (
                <ul className="sub-menu">
                  {menu.sub_menus.map((sub_m, i) => (
                    <li key={i}>
                      <Link href={sub_m.link}>{sub_m.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li key={menu.id}>
              <Link href={menu.link}>
                {num && index <= 9
                  ? `0${index + 1 + "."}`
                  : num && index + 1 + "."}
                {menu.title}
              </Link>
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default NavMenu;
