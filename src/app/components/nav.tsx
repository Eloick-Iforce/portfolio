"use client";

import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { FaBars, FaTimes, FaCaretDown } from "react-icons/fa";
import { FlagIcon } from "react-flag-kit";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  const closeMenu = () => {
    setIsOpen(false);
  };

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    setIsLanguageMenuOpen(false);
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
            <div className="fixed left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-16 bg-primary text-4xl">
              <button onClick={closeMenu}> Close </button>
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
          <div className="mr-16 flex items-center gap-8">
            <Link href="#about">
              <p className="text-white">About</p>
            </Link>
            <Link href="#projects">
              <p className="text-white">Projects</p>
            </Link>
            <Link href="#contact">
              <p className="text-white">Contact</p>
            </Link>
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                  className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                >
                  {language} <FaCaretDown />
                </button>
              </div>

              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <a
                      href="#"
                      onClick={() => changeLanguage("EN")}
                      className="flex gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      <FlagIcon code="GB" size={32} /> English
                    </a>
                    <a
                      href="#"
                      onClick={() => changeLanguage("FR")}
                      className="flex gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      <FlagIcon code="FR" size={32} /> Français
                    </a>
                    <a
                      href="#"
                      onClick={() => changeLanguage("DE")}
                      className="flex gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      <FlagIcon code="DE" size={32} /> Deutsch
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navigation;
