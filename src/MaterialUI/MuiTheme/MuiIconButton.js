export const MuiIconButton = (palette) => {
  return {
    styleOverrides: {
      root: ({ ownerState }) => ({
        margin: `2px`,
        transition: "none",
        ...(!ownerState.disabled && {
          border: `1px solid ${
            palette[ownerState.color]?.main || palette.text.secondary
          }`,
        }),
        "&:hover": {
          transform: "translate(-2px, -2px)",
          boxShadow: `2px 2px ${
            palette[ownerState.color]?.main || palette.text.secondary
          }`,
        },
        "&:focus-visible": {
          transform: "translate(-2px, -2px)",
          boxShadow: `2px 2px ${
            palette[ownerState.color]?.main || palette.text.secondary
          }`,
        },
        "&:active": {
          transform: "translate(0px, 0px)",
          boxShadow: "none",
        },
      }),
    },
  };
};
