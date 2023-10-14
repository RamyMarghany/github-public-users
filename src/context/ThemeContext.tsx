import { createContext, ReactNode, useState } from "react";

type useThemeContext = {
  themeStyle: boolean;
  setThemeStyle: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ThemeContext = createContext({} as useThemeContext);

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [themeStyle, setThemeStyle] = useState<boolean>(false);
  return (
    <ThemeContext.Provider value={{ themeStyle, setThemeStyle }}>
      {children}
    </ThemeContext.Provider>
  );
};
