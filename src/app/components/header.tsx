/* eslint-disable */
"use client";

import TypeIt from "typeit-react";
import { FaArrowDown } from "react-icons/fa";
import { useContext } from "react";
import LanguageContext from "./LanguageContext";
import trad from "../../../public/trad.json";
import { Translations } from "../../../public/trad";
const typedTrad = trad as Translations;

function Header() {
  const { language } = useContext(LanguageContext);
  return (
    <header className="flex h-screen flex-col items-center justify-center p-5 text-white">
      <h1 className="text-2xl font-bold drop-shadow-2xl sm:text-4xl md:text-6xl lg:text-8xl">
        {typedTrad[language as keyof Translations]["greeting"]}
      </h1>
      <h2 className="text-xl font-bold drop-shadow-2xl sm:text-2xl md:text-3xl lg:text-4xl">
        {typedTrad[language as keyof Translations]["iam"]}
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
          className="duration-900 flex items-center gap-4 rounded-lg border-4 border-white p-4 font-bold text-white transition-colors hover:bg-white hover:text-primary"
          onClick={() => {
            const element = document.getElementById("about");
            if (element) element.scrollIntoView({ behavior: "smooth" });
          }}
        >
          {typedTrad[language as keyof Translations]["buttonheader"]}{" "}
          <FaArrowDown />
        </button>
      </div>
    </header>
  );
}

export default Header;
