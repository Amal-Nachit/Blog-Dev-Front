"use client";
import React from "react";
import "./../globals.css";
import {HamburgerMenu} from "../components/HamburgerMenu";

const Header = () => {
  return (
    <header className="w-full bg-white">
      <div className="container p-3 flex items-center justify-between">
        <HamburgerMenu />

        <div className="flex-grow flex justify-center">
          <img src="/images/logo1.png" alt="Logo" className="sm:w-60 sm:h-36 w-32 h-24" />
        </div>

        <div className="justify-end hidden md:flex mb-24">
          <a href="/" className="hover:bg-customGray py-2 px-3 mr-3">
            Tous les articles
          </a>
          <a href="/" className="bg-connexionBlue text-sm py-2 px-3 rounded-md">
            Se connecter
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
