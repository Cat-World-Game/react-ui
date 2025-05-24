import { type CSSProperties } from "react";
import "@mui/material/styles";

interface BasePalette {
  primary: {
    main: string;
    light: string;
  };
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    console: true;
  }
}

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
    client: BasePalette;
  }

  interface PaletteOptions {
    hub: BasePalette;
    client: BasePalette;
  }
}
