/* eslint-disable */
"use client";
import { useState, useEffect, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLinkedin, FaGithub, FaFilePdf, FaGamepad } from "react-icons/fa";
import trad from "../../../public/trad.json";
import LanguageContext from "./LanguageContext";
import { Translations } from "../../../public/trad";
const typedTrad = trad as Translations;

const List = () => {
  const [activeParagraph, setActiveParagraph] = useState(0);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    AOS.init({});
    const handleScroll = () => {
      const paragraphs = document.querySelectorAll(".text-scroll");
      const viewportHeight = window.innerHeight;

      paragraphs.forEach((paragraph, index) => {
        const paragraphTop = paragraph.getBoundingClientRect().top;
        const paragraphBottom = paragraph.getBoundingClientRect().bottom;

        if (
          paragraphTop < viewportHeight / 2 &&
          paragraphBottom > viewportHeight / 2
        ) {
          setActiveParagraph(index + 1);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getParagraphClass = (paragraphIndex: number) => {
    if (paragraphIndex === activeParagraph) {
      return "font-medium text-3xl lg:text-7xl text-white drop-shadow-md transition-colors duration-900";
    } else {
      return "font-medium text-3xl lg:text-7xl text-secondary/20 transition-colors duration-900";
    }
  };

  return (
    <section
      className="wrapper scroll-snap-start bg-primary p-16 lg:h-screen"
      id="about"
    >
      <div className="mt-10 flex h-full flex-col justify-center">
        <p className={getParagraphClass(1) + " text-scroll"} data-aos="fade-up">
          {typedTrad[language as keyof Translations].description1}
        </p>
        <p
          className={getParagraphClass(2) + " text-scroll my-6 lg:my-14"}
          data-aos="fade-up"
        >
          {typedTrad[language as keyof Translations].description2}
        </p>
        <p className={getParagraphClass(3) + " text-scroll"} data-aos="fade-up">
          {typedTrad[language as keyof Translations].description3}
        </p>
        <div className="mt-24 flex flex-col gap-4 sm:flex-row sm:gap-24">
          <button
            data-aos="fade-up"
            className="duration-900 flex items-center gap-4 rounded-lg border-4 border-white p-4 text-white transition-colors hover:bg-white hover:text-primary "
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/elo%C3%AFck-mickisz-227063204/",
                "_blank",
              )
            }
          >
            <FaLinkedin /> LinkedIn
          </button>
          <button
            data-aos="fade-up"
            className="duration-900 flex items-center gap-4 rounded-lg border-4 border-white p-4 text-white transition-colors hover:bg-white hover:text-primary"
            onClick={() =>
              window.open("https://github.com/Eloick-Iforce", "_blank")
            }
          >
            <FaGithub /> GitHub
          </button>
          <button
            data-aos="fade-up"
            className="duration-900 flex items-center gap-4 rounded-lg border-4 border-white p-4 text-white transition-colors hover:bg-white hover:text-primary"
            onClick={() =>
              window.open("https://iforceeloick.itch.io/", "_blank")
            }
          >
            <FaGamepad /> Itch.io
          </button>
        </div>
      </div>
    </section>
  );
};

export default List;
