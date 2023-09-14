"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [bgNavbar, setBgNavbar] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const setNavbarHandler = () => {
      if (window.scrollY >= 350) return setBgNavbar(true);
      return setBgNavbar(false);
    };

    document.addEventListener("scroll", setNavbarHandler);

    return () => {
      document.removeEventListener("scroll", setNavbarHandler);
    };
  }, []);

  const toggleMenuHandler = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div
      className={`${bgNavbar || isNavOpen ? "bg-[#ffffff98]" : ""} ${
        isNavOpen ? "flex justify-center items-center h-screen bg-accent" : ""
      } fixed w-full pt-6 px-7 lg:px-10 z-10 transition-all duration-500 scroll-smooth`}
    >
      <div
        className={`${
          isNavOpen ? "justify-center" : "justify-between"
        } flex items-center`}
      >
        {!isNavOpen && (
          <Link href="/">
            <Image src="/logo.png" alt="Logo Image" width={50} height={50} />
          </Link>
        )}

        <ul
          className={`${
            isNavOpen
              ? "flex flex-col items-center gap-6 text-center text-3xl text-white"
              : "hidden text-[#f96442] md:flex items-center gap-8 text-xl"
          } font-black`}
        >
          <li className="hover:tracking-wider cursor-pointer transition-all duration-300">
            <Link href="/" onClick={() => setIsNavOpen(false)}>
              Home
            </Link>
          </li>
          <li className="hover:tracking-wider cursor-pointer transition-all duration-300">
            <Link href="#food" onClick={() => setIsNavOpen(false)}>
              Food
            </Link>
          </li>
          <li className="hover:tracking-wider cursor-pointer transition-all duration-300">
            <Link href="#dish" onClick={() => setIsNavOpen(false)}>
              Dish
            </Link>
          </li>
          <li className="hover:tracking-wider cursor-pointer transition-all duration-300">
            <Link href="#about" onClick={() => setIsNavOpen(false)}>
              About
            </Link>
          </li>
          <li className="hover:tracking-wider cursor-pointer transition-all duration-300">
            <Link href="#contact" onClick={() => setIsNavOpen(false)}>
              Contact
            </Link>
          </li>

          {/* <button className="bg-accent px-6 py-2 text-white rounded-3xl cursor-pointer hover:tracking-wider hover:bg-white hover:text-accent transition-all duration-300">
            SignUp
          </button> */}
        </ul>

        <AiOutlineMenu
          className={`${
            isNavOpen ? "text-white" : "text-accent"
          } absolute block top-7 right-5 md:hidden cursor-pointer`}
          size={30}
          onClick={toggleMenuHandler}
        />
      </div>
    </div>
  );
};

export default Navbar;
