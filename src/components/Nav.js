import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
    }
  return (
    <div className="flex items-center justify-between fixed w-full px-5 h-20 bg-white">
      <a href="#">
        <img src={require("../images/logo.png")} alt="logo" />
      </a>
      <ul className="hidden md:flex h-6 items-center">
        <li className="p-3 text-red-800 font-bold cursor-pointer hover:text-red-700">
          Home
        </li>
        <li className="p-3 text-red-800 font-bold cursor-pointer hover:text-red-700">
          About Us
        </li>
        <li className="p-3 text-red-800 font-bold cursor-pointer hover:text-red-700">
          Reviews
        </li>
        <li className="p-3 text-red-800 font-bold cursor-pointer hover:text-red-700">
          FAQ
        </li>
        <li className="p-3 text-white font-bold cursor-pointer bg-red-800 rounded">
          +201146646254
        </li>
      </ul>
      <div onClick={handleToggle} className="block md:hidden px-5">
        {!toggle ? (
          <FontAwesomeIcon
            size="2x"
            className="cursor-pointer text-red-800"
            icon={faBars}
          />
        ) : (
          <FontAwesomeIcon
            size="2x"
            className="cursor-pointer text-red-800"
            icon={faXmark}
          />
        )}
      </div>
      {toggle ? (
        <ul className="fixed left-0 top-20 w-full md:hidden px-5 bg-white">
          <li className="p-3 text-red-800 font-bold cursor-pointer hover:text-red-700">
            Home
          </li>
          <li className="p-3 text-red-800 font-bold cursor-pointer hover:text-red-700">
            About Us
          </li>
          <li className="p-3 text-red-800 font-bold cursor-pointer hover:text-red-700">
            Reviews
          </li>
          <li className="p-3 text-red-800 font-bold cursor-pointer hover:text-red-700">
            FAQ
          </li>
          <li className="p-3 text-white font-bold cursor-pointer bg-red-800 rounded">
            +201146646254
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default Nav;
