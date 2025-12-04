"use client"

import { createTheme, type ThemeOptions } from "@mui/material/styles";
import MuiCssBaseline from "../components/MuiCssBaseline";
import breakpoints from "../const/breakpoints";
import MuiDialog from "../components/MuiDialog";
import MuiButton from "../components/MuiButton";
import MuiLink from "../components/MuiLink";
import MuiTooltip from "../components/MuiTooltip";
import MuiPaper from "../components/MuiPaper";
import MuiTextField from "../components/MuiTextField";
import MuiIconButton from "../components/MuiIconButton";
import MuiAutocomplete from "../components/MuiAutocomplete";

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
      ...MuiDialog,
      ...MuiButton,
      ...MuiLink,
      ...MuiTooltip,
      ...MuiPaper,
      ...MuiTextField,
      ...MuiIconButton,
      ...MuiAutocomplete,
    },
  });
};

export default createCustomTheme;
