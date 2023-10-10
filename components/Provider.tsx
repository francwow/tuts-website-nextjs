"use client";

import { PropsWithChildren, useState } from "react";
import { NavContext } from "../context/NavContext";
import { NavActiveType } from "../types/Types";

const Provider = (props: PropsWithChildren) => {
  const [navActive, setNavActive] = useState<NavActiveType>(false);

  return (
    <NavContext.Provider value={{ navActive, setNavActive }}>
      {props.children}
    </NavContext.Provider>
  );
};

export default Provider;
