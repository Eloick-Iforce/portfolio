/* eslint-disable */
"use client";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLinkedin, FaGithub, FaFilePdf, FaGamepad } from "react-icons/fa";

const List = () => {
  const [activeParagraph, setActiveParagraph] = useState(0);

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
      return "font-medium text-3xl lg:text-7xl text-red-400 transition-colors duration-900";
    }
  };

  return (
    <section
      className="wrapper scroll-snap-start bg-primary p-16 lg:h-screen"
      id="about"
    >
      <div className="mt-10 flex h-full flex-col justify-center">
        <p className={getParagraphClass(1) + " text-scroll"} data-aos="fade-up">
          I like to create things for the web and video games
        </p>
        <p
          className={getParagraphClass(2) + " text-scroll my-6 lg:my-14"}
          data-aos="fade-up"
        >
          Constantly looking for new challenges and new technologies !
        </p>
        <p className={getParagraphClass(3) + " text-scroll"} data-aos="fade-up">
          Student at Haguenau in BUT Digital Creation (Métier du Multimédia et
          de l'Internet)
        </p>
        <div className="mt-24 flex flex-col gap-4 sm:flex-row sm:gap-24">
          <button
            className="duration-900 flex items-center gap-4 rounded-lg border-4 border-white p-4 text-white transition-colors hover:bg-white hover:text-primary"
            onClick={() => window.open("https://your-cv-link", "_blank")}
            data-aos="fade-up"
          >
            <FaFilePdf /> CV
          </button>
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
