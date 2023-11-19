"use client";

import Header from "./components/header";
import Navigation from "./components/nav";
import List from "./components/list";
import Projects from "./components/projects";
import FormComponent from "./components/form";
import LanguageContext from "./components/LanguageContext";

import { Toaster } from "react-hot-toast";
import { useState } from "react";

export default function HomePage() {
  const [language, setLanguage] = useState("EN");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <main className="min-w-screen scroll-snap-y-mandatory min-h-screen overflow-auto overflow-x-hidden bg-gradient-to-b from-[#595cff] to-[#c6f8ff] text-white">
        <Navigation />
        <div className="scroll-snap-start">
          <Header />
          <List />
          <Projects />
          <FormComponent />
          <Toaster />
        </div>
      </main>
    </LanguageContext.Provider>
  );
}
