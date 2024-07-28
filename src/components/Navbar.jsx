import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";



const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img  className="mx-0.5 w-40" src={logo} alt="logo"/>
      </div>
        
      <div className="m-8 flex items-center  justify-between gap-4 text-4xl">
            <a href="https://github.com/Akansha1409" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/akansha-gautam-b29a19254" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/akansha14_09_" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
  
    </nav>
   );
};

export default Navbar;

  