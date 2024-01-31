import React from "react";
import { NavLink } from "react-router-dom";

const navbar = [
  {
    to: "/",
    name: "HOME",
  },
  {
    to: "/add",
    name: "ADD LINK",
  },
  {
    to: "/list",
    name: "LIST LINK",
  },
  {
    to: "/detail",
    name: "LINK DETAIL",
  },
];

const Header = () => {
  return (
    <header className="flex items-center justify-center py-10 mb-5 text-2xl font-bold text-black header gap-x-10">
      {navbar.map((item, index) => (
        <NavLink
          to={item.to}
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
          key={index}
        >
          {item.name}
        </NavLink>
      ))}
    </header>
  );
};

export default Header;
