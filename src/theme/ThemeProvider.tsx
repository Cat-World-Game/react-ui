import {
  type PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";

import {
  ThemeProvider as MaterialThemeProvider,
  type ThemeOptions,
} from "@mui/material/styles";
import darkMain from "./assets/dark-main.json";
import createCustomTheme from "./utils/createCustomTheme";
import ThemeDispatchContext from "./ThemeDispatchContext";

export const defaultTheme = createCustomTheme(darkMain as ThemeOptions);

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const localTheme = localStorage.getItem("cwg:theme");
      if (localTheme) setTheme(createCustomTheme(JSON.parse(localTheme)));
    } catch (err) {
      console.error(err);
    }
  }, []);

  const changeTheme = useCallback((asset: ThemeOptions) => {
    setTheme(createCustomTheme(asset));
  }, []);


  return (
    <ThemeDispatchContext.Provider value={changeTheme}>
      <MaterialThemeProvider theme={theme}>{children}</MaterialThemeProvider>
    </ThemeDispatchContext.Provider>
  );
};

export default ThemeProvider;
