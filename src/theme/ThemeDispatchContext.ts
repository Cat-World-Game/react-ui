import { createContext } from "react";
import type { ThemeOptions } from "@mui/material/styles";

const ThemeDispatchContext = createContext<(asset: ThemeOptions) => void>(
  () => {}
);

export default ThemeDispatchContext;
