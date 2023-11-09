import { createContext } from "react";

const LanguageContext = createContext({
  language: "EN",
  setLanguage: (language: string) => {},
});

export default LanguageContext;
