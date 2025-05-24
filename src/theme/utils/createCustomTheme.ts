import { createTheme, type ThemeOptions } from "@mui/material/styles";
import MuiCssBaseline from "../components/MuiCssBaseline";
import breakpoints from "../const/breakpoints";

const createCustomTheme = (asset: ThemeOptions) => {
  return createTheme({
    ...asset,
    breakpoints: {
      values: breakpoints,
    },
    typography: {
      fontFamily: ["Neucha"].join(","),
      console: {
        fontSize: "0.8rem",
        fontFamily: "monospace",
      },
    },
    components: {
      ...MuiCssBaseline,
      // ...MuiIconButton,
      // ...MuiInput,
      // ...MuiPaper,
      // ...MuiSnackbar,
      // ...MuiButton,
      // ...MuiSlider,
      // ...MuiTooltip,
      // ...MuiLink,
      // ...MuiDivider,
      // ...MuiDialog,
      // ...MuiList,
    },
  });
};

export default createCustomTheme;
