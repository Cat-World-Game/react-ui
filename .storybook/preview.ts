import type { Preview } from "@storybook/react";
import CssBaseline from "@mui/material/CssBaseline";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { ThemeProvider } from "../src/main";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles: CssBaseline,
    Provider: ThemeProvider,
  }),
];

export default preview;
