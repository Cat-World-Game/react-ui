"use client"

import { type PropsWithChildren, useReducer, useEffect } from "react";

import { ThemeProvider as MaterialThemeProvider, type ThemeOptions } from "@mui/material/styles";

import getThemeDispatchContext from "./ThemeDispatchContext";
import reducer from "./reducer";
import createCustomTheme from "./utils/createCustomTheme";
import darkMain from "./assets/dark-main.json";

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, dispatch] = useReducer( reducer, createCustomTheme(darkMain as ThemeOptions));

  useEffect(() => {
    try {
      const saved = localStorage.getItem("cwg:theme");
      if (saved) {
        dispatch(JSON.parse(saved));
      }
    } catch { /* empty */ }
  }, []);

  const ThemeDispatchContext = getThemeDispatchContext();

  return (
    <ThemeDispatchContext.Provider value={dispatch}>
      <MaterialThemeProvider theme={theme}>{children}</MaterialThemeProvider>
    </ThemeDispatchContext.Provider>
  );
};

export default ThemeProvider;
