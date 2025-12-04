"use client"

import { useContext } from "react";
import { useTheme as useMaterialTheme } from "@mui/material/styles";
import getThemeDispatchContext from "../ThemeDispatchContext";

const useTheme = () => {
  const theme = useMaterialTheme();
  const changeTheme = useContext(getThemeDispatchContext());

  return { theme, changeTheme };
};

export default useTheme;
