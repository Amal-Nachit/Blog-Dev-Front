"use client";
import Hamburger from "hamburger-react";
import React, { useState } from "react";

export const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className="relative md:hidden">
      <div className="cursor-pointer sticky z-20 mt-2">
        <Hamburger toggled={open} toggle={handleOpen} color="#0A0909" />
      </div>
      {open && (
        <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <a href="#home">S'inscrire</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <a href="#about">Se connecter</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <a href="#services">Tous les articles</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <a href="#contact">A propos</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
