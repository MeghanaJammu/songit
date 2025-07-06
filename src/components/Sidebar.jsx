/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable quotes */

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";

import { logo } from "../assets";
import { links } from "../assets/constants";

const NavBar = ({ handleClick }) => (
  <div className="mt-10">
    {links.map((link) => (
      <NavLink
        key={link.name}
        to={link.to}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-pink-400"
        onClick={() => handleClick && handleClick()}
      >
        <link.icon className="w-6 h-6 mr-2" />
        {link.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-2 bg-[#191624]">
        <img src={logo} className="w-full h-14 object-contain" />
        <NavBar handleClick={() => setMobileOpen(false)} />
      </div>

      <div className="absolute md:hidden block top-6 right-3">
        {mobileOpen ? (
          <RiCloseLine
            onClick={() => setMobileOpen(false)}
            className="w-6 h-6 text-[#e35df5] mr-2"
          />
        ) : (
          <HiOutlineMenu
            onClick={() => setMobileOpen(true)}
            className="w-6 h-6 text-[#e35df5] mr-2"
          />
        )}
      </div>

      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-[#43637a] to-[#1769a3] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
          mobileOpen ? "left-0" : "-left-full"
        }`}
      >
        <img src={logo} className="w-full h-14 object-contain" />
        <NavBar handleClick={() => setMobileOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
