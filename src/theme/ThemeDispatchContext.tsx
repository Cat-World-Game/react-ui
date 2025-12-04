"use client"

import { type ThemeOptions } from "@mui/material/styles";
import { createContext, type Dispatch } from "react";

let ThemeDispatchContext:
  | ReturnType<typeof createContext<Dispatch<ThemeOptions>>>
  | null = null;

export default function getThemeDispatchContext() {
  if (!ThemeDispatchContext) {
    ThemeDispatchContext = createContext<Dispatch<ThemeOptions>>(() => {});
  }
  return ThemeDispatchContext;
}
