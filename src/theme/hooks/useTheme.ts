import { useContext } from "react";
import { useTheme as useMaterialTheme } from "@mui/material/styles";
import ThemeDispatchContext from "../ThemeDispatchContext";

const useTheme = () => {
  const theme = useMaterialTheme();
  const changeTheme = useContext(ThemeDispatchContext);

  return { theme, changeTheme };
};

export default useTheme;
