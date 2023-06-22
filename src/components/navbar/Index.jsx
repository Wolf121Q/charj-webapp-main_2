import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/charj_logo.png";
import logoWhite from "../../assets/charj_logowhite.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useLocation();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const shouldScrolled = scrollTop > 50;
      setScrolled(shouldScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const homeRoute = router.pathname === "/";
  const darkBgRoute =
    router.pathname === "/services" ||
    router.pathname === "/padestal-energy" ||
    router.pathname === "/charj-network";

  const menuItems = [
    { id: 1, title: "Government Subsidy", url: "/government-subsidy" },
    { id: 2, title: "Services", url: "/services" },
    { id: 3, title: "Contact Us", url: "/contact-us" },
    // { id: 4, title: "Partner With Us", url: "/join-us" },
    { id: 4, title: "FAQ's", url: "/faqs" },
  ];
  return (
    <>
      <div
        className={`${
          scrolled
            ? "bg-white shadow-sm text-black"
            : "bg-transparent text-white"
        } fixed top-0 z-10 w-full max-w-full flex flex-row justify-between items-center transition-colors duration-300 mx-auto pr-5  `}
      >
        <div
          className={`${
            scrolled ? "bg-[#000]" /* bg-[#a81313f6] */ : "bg-transparent"
          } skew-logo  cursor-pointer  h-full px-4 py-5 `}
        >
          <Link to="/">
            {!homeRoute && !darkBgRoute && !scrolled ? (
              <img src={logo} alt="logo" className="h-5" />
            ) : (
              <img src={logoWhite} alt="logo" className="h-5" />
            )}
          </Link>
        </div>

       

        <div className="hidden lg:flex  gap-5">
          {menuItems.map((item) => {
            return (
              <>
                <Link
                  to={item.url}
                  className={`${
                    (homeRoute || darkBgRoute) && !scrolled
                      ? "text-white"
                      : "text-black"
                  } cursor-pointer hover:font-semibold hover:bg-slate-100 hover:text-white hover:bg-opacity-5 px-3 py-1 rounded-md`}
                >
                  {item.title}
                </Link>
              </>
            );
          })}
        </div>

        <div>
          <Link
            to="/join-us"
            className={`${
              (homeRoute || darkBgRoute) && !scrolled
                ? "text-white"
                : "text-black"
            } hidden lg:flex cursor-pointer hover:font-semibold hover:bg-slate-100 hover:text-white hover:bg-opacity-5 px-3 py-1 rounded-md`}
          >
            Partner With Us
          </Link>
        </div>

        <span
          className={`${
            (homeRoute || darkBgRoute) && !scrolled
              ? "text-white"
              : "text-black"
          } cursor-pointer lg:hidden flex`}
          onClick={() => setShowMenu(!showMenu)}
        >
          <FaBars size={20} className="my-3" />
        </span>
        <Menu
          menuItems={menuItems}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
      </div>
    </>
  );
};

export default Navbar;
