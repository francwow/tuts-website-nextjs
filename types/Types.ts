export type LanguageContextType = string;

export type NavActiveType = boolean;

export type NavContextType = {
  navActive: NavActiveType;
  setNavActive: (navActive: boolean) => void;
};
