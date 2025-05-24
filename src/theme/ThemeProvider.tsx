import { type PropsWithChildren, useReducer } from "react";

import {
  ThemeProvider as MaterialThemeProvider,
  type ThemeOptions,
  type Theme,
} from "@mui/material";

import { createCustomTheme, getTheme } from "./utils";
import ThemeDispatchContext from "./ThemeDispatchContext";

const initialThemeReducerState = createCustomTheme(getTheme());

const themeReducer = (currentTheme: Theme, themeAsset: ThemeOptions) => {
  try {
    return createCustomTheme(themeAsset);
  } catch {
    return currentTheme;
  }
};

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, dispatch] = useReducer(themeReducer, initialThemeReducerState);

  return (
    <ThemeDispatchContext.Provider value={dispatch}>
      <MaterialThemeProvider theme={theme}>{children}</MaterialThemeProvider>
    </ThemeDispatchContext.Provider>
  );
};

export default ThemeProvider;
