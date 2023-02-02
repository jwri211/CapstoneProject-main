/**IT6041 Capstone Project - Team Wellington - December 2022
 * "R&E Foundation Web Application"
 * Team Members:
 *  Brayden Dawson
 *  Dwain Aiolupotea
 *  Leone Krauze
 *  John Wright
 * 
 * =================================================================
 * This is the footer component rendered at the bottom of all pages. It
 * is a responsive flexible component that allows easy navigation after 
 * scrolling long pages of content.
 */

import React from "react";
import { Link } from "react-router-dom";

// import logo and facebook icon
import Logo2 from "./images/logo-REF.jpg";
import Icon from "./images/face-icon.png";

function Footer() {
  return (
    <div className="flex flex-col items-center">
      {/* Logo */}
      <div>
        <img
          src={Logo2}
          alt="Company Logo"
          className="w-32 h-28 drop-shadow-md rounded-xl"
        />
      </div>
      {/* footer links */}
      <ul className="flex flex-col py-4 w-1/2 text-xl font-[Roboto] font-light md:flex-row md:w-full md:space-x-6 xl:space-x-14">
        <hr className="my-2 h-px bg-black border-0 invisible" />
        <li className="py-2">
          <Link to="/">home</Link>
        </li>
        <hr className="my-2 h-px bg-black border-0 md:invisible" />
        <li className="py-2">
          <Link to="/about">about</Link>
        </li>
        <hr className="my-2 h-px bg-black border-0 md:invisible" />
        <li className="py-2">
          <Link to="/donate">donate</Link>
        </li>
        <hr className="my-2 h-px bg-black border-0 md:invisible" />
        <li className="py-2">
          <Link to="/testimony">testimony</Link>
        </li>
        <hr className="my-2 h-px bg-black border-0 md:invisible" />
        <li className="py-2">
          <Link to="/contact">contact</Link>
        </li>
        <hr className="my-2 h-px bg-black border-0 md:invisible" />
        <li className="py-2">
          <Link to="/signup">sign up</Link>
        </li>
        <hr className="my-2 h-px bg-black border-0 md:invisible" />
        <li className="py-2">
          <Link to="/login">login</Link>
        </li>
        <hr className="my-2 h-px bg-black border-0 md:invisible" />
      </ul>
      <hr className="invisible md:visible my-4 h-px w-11/12 bg-black border-0" />
      {/* Social links */}
      <img src={Icon} alt="facebook icon" className="w-9 h-9 drop-shadow-md" />
      {/* Copyright section */}
      <div className="py-8 w-3/4">
        <p className="font-[Roboto] font-light text-sm">
          &copy; Ruach Elohim Foundation copyright 2022. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
