"use client";

import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

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
      className={`fixed z-50 flex w-full justify-around p-4 transition-all duration-500 ${
        isScrolled ? "bg-primary" : ""
      }`}
    >
      {isSmallScreen ? (
        <>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center"
          >
            <div className="mb-1.5 h-0.5 w-6 bg-white"></div>
            <div className="mb-1.5 h-0.5 w-6 bg-white"></div>
            <div className="h-0.5 w-6 bg-white"></div>
          </button>
          {isOpen && (
            <div className="bg-primary fixed left-0 top-0 flex h-full w-full flex-col items-center justify-center">
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
        </>
      )}
    </nav>
  );
}

export default Navigation;
