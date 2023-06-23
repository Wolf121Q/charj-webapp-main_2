import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Menu = ({
  menuItems,
  setShowMenu,
  showMenu,
  homeRoute,
  darkBgRoute,
  scrolled,
}) => {
  return (
    <>
      <div
        className={
          showMenu
            ? `fixed top-0 right-0  w-[20rem] h-screen px-8 py-10 z-50 bg-gray-100 text-black  ease-in-out duration-300`
            : "fixed right-[-100%] ease-in-out duration-300 h-screen"
        }
      >
        <div className="w-full flex justify-end">
          <RiCloseLine
            className="text-black cursor-pointer"
            size={25}
            onClick={() => setShowMenu(false)}
          />
        </div>
        <div className="flex flex-col gap-4 my-4">
          {menuItems.map((item) => {
            return (
              <Link
                to={item.url}
                key={item.id}
                className="text-md font-semibold cursor-pointer hover:bg-slate-200 px-3 py-1 rounded-md"
                onClick={() => setShowMenu(!showMenu)}
              >
                {item.title}
              </Link>
            );
          })}
          <Link
            to="/join-us"
            className={` flex lg:hidden text-md font-semibold cursor-pointer hover:bg-slate-200 px-3 py-1 rounded-md`}
            onClick={() => setShowMenu(!showMenu)}

          >
            Partner With Us
          </Link>
        </div>
      </div>
      {showMenu && (
        <div
          className={`fixed top-0  right-0 bottom-0 left-0 bg-gray-900 bg-opacity-30 z-10 ${
            showMenu && "backdrop-blur-sm"
          }`}
          onClick={() => setShowMenu(false)}
        />
      )}
    </>
  );
};

export default Menu;
