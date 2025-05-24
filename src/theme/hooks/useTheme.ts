import { useContext } from "react";
import { useTheme as useMaterialTheme } from "@mui/material";
import ThemeDispatchContext from "../ThemeDispatchContext";

export const useTheme = () => {
  return {
    theme: useMaterialTheme(),
    changeTheme: useContext(ThemeDispatchContext),
  };
};

export default useTheme;
