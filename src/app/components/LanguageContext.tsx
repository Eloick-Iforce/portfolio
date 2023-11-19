import { createContext } from "react";

const LanguageContext = createContext({
  language: "EN",
  setLanguage: (language: string) => {
    console.log(language);
  },
});

export default LanguageContext;
