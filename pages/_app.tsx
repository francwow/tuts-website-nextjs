import type { AppProps } from "next/app";
import NavContext from "../context/NavContext";
import { NavContextType } from "../types/Types";
import { useState } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [navActive, setNavActive] = useState<NavContextType>(false);
  const toggleNav = () => setNavActive(!navActive);

  return (
    <NavContext.Provider value={{ navActive, setNavActive }}>
      <Component {...pageProps} />
    </NavContext.Provider>
  );
}
