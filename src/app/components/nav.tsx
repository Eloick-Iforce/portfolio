"use client";

import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed z-50 w-full p-4 transition-all duration-500 ${
        isScrolled ? "bg-primary" : ""
      } flex items-center justify-between`}
    >
      <div className="text-xl font-bold">
        Eloïck<span className="text-4xl text-green-500">.</span>fr
      </div>
      {isSmallScreen ? (
        <>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FaTimes className="text-6xl text-white" />
            ) : (
              <FaBars className="text-white" />
            )}
          </button>
          {isOpen && (
            <div className="bg-primary fixed left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-16 text-4xl">
              <button onClick={closeMenu}> Close </button>

              <Link href="/" onClick={closeMenu}>
                <p className="text-white">Home</p>
              </Link>
              <Link href="#about" onClick={closeMenu}>
                <p className="text-white">About</p>
              </Link>
              <Link href="#projects" onClick={closeMenu}>
                <p className="text-white">Projects</p>
              </Link>
              <Link href="#contact" onClick={closeMenu}>
                <p className="text-white">Contact</p>
              </Link>
            </div>
          )}
        </>
      ) : (
        <>
          <div className="mr-16 flex gap-8">
            <Link href="/">
              <p className="text-white">Home</p>
            </Link>
            <Link href="#about">
              <p className="text-white">About</p>
            </Link>
            <Link href="#projects">
              <p className="text-white">Projects</p>
            </Link>
            <Link href="#contact">
              <p className="text-white">Contact</p>
            </Link>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navigation;
