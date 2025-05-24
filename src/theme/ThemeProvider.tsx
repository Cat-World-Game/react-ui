import { type PropsWithChildren, useReducer } from "react";

import { ThemeProvider as MaterialThemeProvider } from "@mui/material";

import ThemeDispatchContext from "./ThemeDispatchContext";
import reducer from "./reducer";
import createCustomTheme from "./utils/createCustomTheme";
import getTheme from "./utils/getTheme";

const initialReducerState = createCustomTheme(getTheme());

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, dispatch] = useReducer(reducer, initialReducerState);

  return (
    <ThemeDispatchContext.Provider value={dispatch}>
      <MaterialThemeProvider theme={theme}>{children}</MaterialThemeProvider>
    </ThemeDispatchContext.Provider>
  );
};

export default ThemeProvider;
