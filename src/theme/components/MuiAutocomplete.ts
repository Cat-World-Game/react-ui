import { filledInputClasses } from "@mui/material/FilledInput";
import { inputBaseClasses } from "@mui/material/InputBase";
import { type ThemeOptions } from "@mui/material/styles";

const MuiAutocomplete: ThemeOptions["components"] = {
  MuiAutocomplete: {
    styleOverrides: {
      root: {
        [`& .${filledInputClasses.root}`]: {
          paddingTop: "8px",
          paddingBottom: "8px",
          paddingLeft: "12px",
          [`& .${filledInputClasses.input}`]: {
            padding: 0,
          }
        },
      },
    },
    variants: [
      {
        props: { size: "small" },
        style: {
          [`& .${filledInputClasses.root}.${inputBaseClasses.sizeSmall}`]: {
            paddingTop: "4px",
            paddingBottom: "4px",
            paddingLeft: "8px",
            [`& .${filledInputClasses.input}`]: {
            padding: 0,
          }
          },
        },
      },
    ],
  },
};

export default MuiAutocomplete;
