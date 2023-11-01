/* eslint-disable */
"use client";

import TypeIt from "typeit-react";
import { FaArrowDown } from "react-icons/fa";

function Header() {
  return (
    <header className="flex h-screen flex-col items-center justify-center p-5 text-white">
      <h1 className="text-2xl font-bold drop-shadow-2xl sm:text-4xl md:text-6xl lg:text-8xl">
        Hi, I'm Eloïck
      </h1>
      <h2 className="text-xl font-bold drop-shadow-2xl sm:text-2xl md:text-3xl lg:text-4xl">
        a
        <TypeIt
          getBeforeInit={(instance) => {
            instance
              .type(" Web developer.")
              .pause(1000)
              .delete(14)
              .pause(500)
              .type("Video Game developer.")
              .pause(2000)
              .delete(21)
              .type("Web developer.");
            return instance;
          }}
          className="text-primary"
        ></TypeIt>
      </h2>
      <div className="mt-10">
        <button
          className="hover:text-primary duration-900 flex items-center gap-4 rounded-lg border-4 border-white p-4 font-bold text-white transition-colors hover:bg-white"
          onClick={() => {
            const element = document.getElementById("about");
            if (element) element.scrollIntoView({ behavior: "smooth" });
          }}
        >
          See more <FaArrowDown />
        </button>
      </div>
    </header>
  );
}

export default Header;
