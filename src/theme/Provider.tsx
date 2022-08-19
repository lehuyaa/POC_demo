import { ThemeProvider, createTheme } from "@mui/material/styles";

import themes from "./themes";
import type { CustomThemeProviderProps } from "./types";

function CustomThemeProvider({ children }: CustomThemeProviderProps) {
  return (
    <ThemeProvider theme={createTheme(themes.dark)}>{children}</ThemeProvider>
  );
}

export default CustomThemeProvider;
