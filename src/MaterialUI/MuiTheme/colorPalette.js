import { cyan, lightBlue } from "@mui/material/colors";

export const colorPalette = (mode, defaultPalette) => {
  return {
    ...defaultPalette,
    mode: mode,
    //Palette values for both
    // primary: amber,
    ...(mode === "light"
      ? {
          // Palette values for light mode
          primary: {
            light: cyan[600],
            main: cyan[700],
            dark: cyan[800],
          },
          secondary: {
            light: lightBlue[500],
            main: lightBlue[600],
            dark: lightBlue[700],
          },
          // divider: amber[200],
          // text: {
          //   primary: grey[900],
          //   secondary: grey[800],
          // },
        }
      : {
          // Palette values for dark mode
          primary: {
            light: cyan[500],
            main: cyan[600],
            dark: cyan[700],
          },
          secondary: {
            light: lightBlue[400],
            main: lightBlue[500],
            dark: lightBlue[600],
          },
          // divider: deepOrange[700],
          // background: {
          //   default: deepOrange[900],
          //   paper: deepOrange[900],
          // },
          // text: {
          //   primary: '#fff',
          //   secondary: grey[500],
          // },
        }),
  };
};
