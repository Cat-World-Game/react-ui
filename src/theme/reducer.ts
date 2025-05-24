import type { Theme, ThemeOptions } from "@mui/material";
import createCustomTheme from "./utils/createCustomTheme";

const reducer = (currentTheme: Theme, themeAsset: ThemeOptions) => {
  try {
    return createCustomTheme(themeAsset);
  } catch {
    return currentTheme;
  }
};

export default reducer;
