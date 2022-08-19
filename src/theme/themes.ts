import { ThemeOptions } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";

import { Themes } from "./types";

const sharedTheme = {
  typography: {
    htmlFontSize: 16,
    fontSize: 16,
    fontFamily: [
      "Space Grotesk",
      "Arial",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      fontSize: "3.375rem", // 54px
      fontWeight: 600,
      lineHeight: "72px",
    },
    h2: {
      fontSize: "1.875rem", // 30px
      fontWeight: 600,
      lineHeight: "100%",
    },
    h3: {
      fontSize: "1.5rem", // 24px
      fontWeight: 500,
      lineHeight: "100%",
    },
    h4: {
      fontSize: "1.25rem", // 20px
      fontWeight: 500,
      lineHeight: "100%",
    },
    body1: {
      fontSize: "1rem", // 16px
      lineHeight: "24px",
      fontWeight: 400,
    },
    body2: {
      fontSize: "1rem", // 16px
      lineHeight: "24px",
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: "0.875rem", // 14px
      lineHeight: "20px",
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: "0.875rem", // 14px
      fontWeight: 500,
      lineHeight: "20px",
    },
    caption: {
      fontSize: "0.75rem",
      lineHeight: "19.5px",
    },
  },
  shape: {
    borderRadius: 8,
  },
  palette: {
    background: {
      default: "#fafafa",
      paper: "#fff",
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        contained: {
          backdropFilter: "blur(42px)",
        },
        containedPrimary: {
          background:
            "linear-gradient(100.76deg, #EF53C3 13.75%, #AD00FF 52.68%, #315EFE 165.76%)",
          color: "#fff",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        vertical: {
          marginRight: 10,
          marginLeft: 10,
        },
        // TODO: open issue for missing "horizontal" CSS rule
        // in Divider API - https://mui.com/material-ui/api/divider/#css
        middle: {
          marginTop: 10,
          marginBottom: 10,
          width: "80%",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        defaultProps: {
          variant: "outlined",
        },
      },
    },
  },
} as ThemeOptions; // the reason for this casting is deepmerge return type
// TODO (Suren): replace mui-utils-deepmerge with lodash or ramda deepmerge

const themes: Record<Themes, ThemeOptions> = {
  light: deepmerge(sharedTheme, {
    palette: {
      mode: "light",
      background: {
        default: "#fafafa",
        paper: "#fff",
      },
      primary: {
        main: "#80afe7",
      },
    },
  }),

  dark: deepmerge(sharedTheme, {
    palette: {
      mode: "dark",
      background: {
        default: "#101010",
        paper: "#171717",
      },
      primary: {
        main: "#80afe7",
      },
    },
  }),
};

export default themes;
