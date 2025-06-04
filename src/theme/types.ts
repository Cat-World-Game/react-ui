import { type CSSProperties } from "react";
import "@mui/material/styles";
import type { Palette } from "@mui/material/styles";
import "@mui/material/Button";

export interface BasePalette {
  primary: Palette["primary"];
  secondary: Palette["secondary"];
  background: Palette["background"];
  text: Palette["text"];
}

export type EnvironmentType = "play" | "hub";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    console: CSSProperties;
  }

  interface TypographyVariantsOptions {
    console: CSSProperties;
  }

  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    desktop: true;
  }

  interface Palette {
    hub: BasePalette;
    play: BasePalette;
  }

  interface PaletteOptions {
    hub: BasePalette;
    play: BasePalette;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    console: true;
  }

  interface TypographyOwnProps {
    outline?: string;
  }
}

declare module "@mui/material/Dialog" {
  interface DialogProps {
    env?: EnvironmentType;
  }
}

declare module "@mui/material/Button" {
  interface ButtonOwnProps {
    env?: EnvironmentType;
  }
}

declare module "@mui/material/Paper" {
  interface PaperOwnProps {
    env?: EnvironmentType;
  }
}

declare module "@mui/material/TextField" {
  interface BaseTextFieldProps {
    env?: EnvironmentType;
  }
}

declare module "@mui/material/IconButton" {
  interface IconButtonOwnProps {
    env?: EnvironmentType;
  }
}