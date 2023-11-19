type TranslationKeys = "FR" | "EN" | "DE";

interface TranslationContent {
  about: string;
  projects: string;
  contact: string;
  greeting: string;
  iam: string;
  buttonheader: string;
  description1: string;
  description2: string;
  description3: string;
  projectHeading: string;
  contactMe: string;
  champform1: string;
  champform2: string;
  champform3: string;
  champform4: string;
  buttonform: string;
  email: string;
}

type Translations = {
  [key in TranslationKeys]: TranslationContent;
};

export type { Translations };
