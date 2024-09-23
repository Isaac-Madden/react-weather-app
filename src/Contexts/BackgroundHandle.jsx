import { createContext, useState } from "react";

export const Background = createContext();

export const BackgroundProvider = ({ children }) => {
  const [currentBackground, setCurrentBackground] = useState("Sunny");

  return (
    <Background.Provider value={{ currentBackground, setCurrentBackground }}>
      {children}
    </Background.Provider>
  );
}