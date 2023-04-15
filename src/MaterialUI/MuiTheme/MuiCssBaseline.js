export const MuiCssBaseline = (palette) => {
  return {
    styleOverrides: {
      body: {
        "& ::-moz-selection": {
          backgroundColor: palette.text.primary,
          color: palette.background.default,
        },
        "& ::selection": {
          backgroundColor: palette.text.primary,
          color: palette.background.default,
        },
      },
    },
  };
};
