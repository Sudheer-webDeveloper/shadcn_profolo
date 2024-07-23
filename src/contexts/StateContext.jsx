"use client";

import { usePathname } from "next/navigation";
import React, { createContext, useState, useContext } from "react";
import profileImg from "../../public/verifiedProfile.png";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const pathName = usePathname();
  const [dummyUser, setDummyUser] = useState({
    userId: "SIN177",
    name: "Sindhu Uppalapati",
    city: "Hyderabad",
    profile: "",
    isVerified: true,
    profileImg: profileImg,
    profileComplete: 33,
  });

  return (
    <StateContext.Provider value={{ pathName, dummyUser }}>
      {children}
    </StateContext.Provider>
  );
};

// Custom hook to use the context
export const useStateContext = () => useContext(StateContext);
