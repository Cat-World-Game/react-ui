import { type ThemeOptions } from "@mui/material/styles";
import { createContext, type Dispatch } from "react";

const ThemeDispatchContext = createContext<Dispatch<ThemeOptions>>(() => {});

export default ThemeDispatchContext;
