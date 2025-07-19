import Sidebar from "@/common/sidebar";
import useSticky from "hooks/use-sticky";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import menu_data from "./menu-data";
import { FaSearch } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi2";

const HeaderTwo = () => {
  const { sticky } = useSticky();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const toggleDropdown = (id) => {
    setOpenDropdowns((prev) => {
      const isCurrentlyOpen = !!prev[id];
      const newState = {};
      Object.keys(prev).forEach((key) => {
        newState[key] = false;
      });
      newState[id] = !isCurrentlyOpen;
      return newState;
    });
  };

  const isActiveLink = (link) => {
    return link === "/"
      ? router.pathname === "/"
      : router.pathname.startsWith(link);
  };

  const isActiveParent = (menu) => {
    if (isActiveLink(menu.link)) return true;
    if (menu.sub_menus) {
      return menu.sub_menus.some((sub) => {
        if (isActiveLink(sub.link)) return true;
        if (sub.sub_menus) {
          return sub.sub_menus.some((sub2) => isActiveLink(sub2.link));
        }
        return false;
      });
    }
    return false;
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleRouteChange = () => {
      setMenuOpen(false);
      setOpenDropdowns({});
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  useEffect(() => {
    if (!menuOpen) {
      setOpenDropdowns({});
    }
  }, [menuOpen]);

  const columns = 3;
  const menuColumns = Array.from({ length: columns }, (_, i) =>
    menu_data.filter((_, idx) => idx % columns === i)
  );

  const handleMenuItemClick = (menu, e) => {
    if (menu.has_dropdown) {
      e.preventDefault();
      toggleDropdown(menu.id);
    } else {
      router.push(menu.link);
    }
  };

  const handleSubMenuItemClick = (menu, sub, i, e) => {
    if (sub.has_dropdown) {
      e.preventDefault();
      e.stopPropagation();
      const id = `${menu.id}-${i}`;
      setOpenDropdowns((prev) => {
        const newState = { ...prev };
        newState[id] = !prev[id];
        return newState;
      });
    } else {
      router.push(sub.link);
    }
  };

  return (
    <>
      <header
        className={`header-bar d-flex align-items-center justify-content-between px-4 py-2 ${
          sticky ? "header-sticky" : ""
        }`}
      >
        <div className="header-logo-box ">
          <Link href="/">
            <img src="/assets/img/logo/dimerlogo.png" alt="Dimer Logo" />
          </Link>
        </div>

        <form className="header-search-bar d-flex align-items-center flex-grow-1 mx-4" onSubmit={e => { e.preventDefault(); if (searchValue.trim()) router.push(`/search?q=${encodeURIComponent(searchValue)}`); }}>
          <div className={`search-container ${searchFocused ? "focused" : ""}`}>
            <div className="search-input-wrapper">
              <input
                type="text"
                className={`search-input form-control ${
                  searchFocused ? "focused" : ""
                }`}
                placeholder="Search product..."
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
            </div>
            <button
              type="submit"
              className="category-button btn"
              aria-label="Search"
            >
              <FaSearch />
            </button>
          </div>
        </form>

        <button
          className="menu-button btn p-0 ms-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="menu-icon">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <rect 
                y="7" 
                width="32" 
                height="3" 
                rx="1.5" 
                fill="#2d3748"
                style={{
                  transform: menuOpen ? 'rotate(45deg) translate(8px, 8px)' : 'rotate(0deg)',
                  transformOrigin: 'center',
                  transition: 'all 0.3s ease'
                }}
              />
              <rect 
                y="15" 
                width="32" 
                height="3" 
                rx="1.5" 
                fill="#2d3748"
                style={{
                  opacity: menuOpen ? 0 : 1,
                  transform: menuOpen ? 'scaleX(0)' : 'scaleX(1)',
                  transformOrigin: 'center',
                  transition: 'all 0.3s ease'
                }}
              />
              <rect 
                y="23" 
                width="24" 
                height="3" 
                rx="1.5" 
                fill="#2d3748"
                style={{
                  transform: menuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'rotate(0deg)',
                  transformOrigin: 'center',
                  transition: 'all 0.3s ease',
                  width: menuOpen ? '32px' : '24px'
                }}
              />
            </svg>
          </span>
        </button>
      </header>

      {menuOpen && (
        <div className="menu-overlay">
          <button
            onClick={() => setMenuOpen(false)}
            className="menu-close-button"
            aria-label="Close menu"
          >
            ×
          </button>

          {/* Mobile Search Bar in Overlay */}
          <form
           className="mobile-search-bar "
           
            onSubmit={e => { e.preventDefault(); if (searchValue.trim()) { setMenuOpen(false); router.push(`/search?q=${encodeURIComponent(searchValue)}`); } }}
          >
            <div className={`search-container ${searchFocused ? "focused" : ""}`}> 
              <div className="search-input-wrapper">
                <input
                  type="text"
                  className={`search-input form-control ${searchFocused ? "focused" : ""}`}
                  placeholder="Search product..."
                  value={searchValue}
                  onChange={e => setSearchValue(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  style={{ fontSize: '15px', padding: '6px 12px', borderRadius: '30px 0 0 30px', border: '1px solid #ddd', borderRight: 'none', width: '100%' }}
                />
              </div>
              <button
                type="submit"
                className="category-button btn"
                aria-label="Search"
                style={{ borderRadius: '0 30px 30px 0', fontSize: '16px', padding: '6px 12px' }}
              >
                <FaSearch />
              </button>
            </div>
          </form>

          <nav className="menu-nav">
            <div className="menu-columns">
              {menuColumns.map((col, colIdx) => (
                <ul key={colIdx} className="menu-column">
                  {col.map((menu) => (
                    <li key={menu.id} className="menu-item">
                      <div
                        className={`menu-item-header ${
                          menu.has_dropdown ? "clickable" : ""
                        }`}
                        onClick={(e) => handleMenuItemClick(menu, e)}
                        tabIndex={0}
                      >
                        <span
                          className={`menu-link ${
                            isActiveParent(menu) ? "active" : ""
                          }`}
                        >
                          {menu.title}
                        </span>
                        {menu.has_dropdown && (
                          <HiChevronDown
                            className={`dropdown-arrow ${
                              openDropdowns[menu.id] ? "open" : ""
                            }`}
                          />
                        )}
                      </div>
                      {menu.has_dropdown && menu.sub_menus && (
                        <div
                          className={`dropdown-container ${
                            openDropdowns[menu.id] ? "open" : ""
                          }`}
                        >
                          <ul className="dropdown-list">
                            {menu.sub_menus.map((sub, i) => (
                              <li key={i} className="dropdown-item">
                                <div
                                  className={`dropdown-item-header ${
                                    sub.has_dropdown ? "clickable" : ""
                                  }`}
                                  onClick={(e) =>
                                    handleSubMenuItemClick(menu, sub, i, e)
                                  }
                                  tabIndex={0}
                                >
                                  <span
                                    className={`dropdown-link ${
                                      isActiveLink(sub.link) ? "active" : ""
                                    }`}
                                  >
                                    {sub.title}
                                  </span>
                                  {sub.has_dropdown && (
                                    <HiChevronDown
                                      className={`sub-dropdown-arrow ${
                                        openDropdowns[menu.id + "-" + i]
                                          ? "open"
                                          : ""
                                      }`}
                                    />
                                  )}
                                </div>
                                {sub.has_dropdown && sub.sub_menus && (
                                  <div
                                    className={`sub-dropdown-container ${
                                      openDropdowns[menu.id + "-" + i]
                                        ? "open"
                                        : ""
                                    }`}
                                  >
                                    <ul className="sub-dropdown-list">
                                      {sub.sub_menus.map((sub2, j) => (
                                        <li
                                          key={j}
                                          className="sub-dropdown-item"
                                        >
                                          <Link
                                            href={sub2.link}
                                            className={`sub-dropdown-link ${
                                              isActiveLink(sub2.link)
                                                ? "active"
                                                : ""
                                            }`}
                                          >
                                            {sub2.title}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default HeaderTwo;