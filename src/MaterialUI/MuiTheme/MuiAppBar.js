import { alpha } from "@mui/material";

export const MuiAppBar = (palette) => {
  return {
    styleOverrides: {
      root: {
        backgroundColor: palette.background.default,
        color: palette.text.primary,
        borderBottom: `1px solid ${palette.primary.main}`,
        boxShadow: `0 16px 16px -16px ${alpha(palette.primary.main, 0.2)}`,
      },
    },
  };
};
