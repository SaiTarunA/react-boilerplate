export const MuiButton = (palette) => {
  return {
    styleOverrides: {
      root: {
        margin: `2px`,
        transition: "none",
        "&:hover": {
          transform: "translate(-2px, -2px)",
        },
        "&:focus-visible": {
          transform: "translate(-2px, -2px)",
        },
        "&:active": {
          transform: "translate(0px, 0px)",
        },
      },
      contained: {
        "&:hover": {
          boxShadow: `2px 2px ${palette.text.primary}`,
        },
        "&:focus-visible": {
          boxShadow: `2px 2px ${palette.text.primary}`,
        },
        "&:active": {
          boxShadow: "none",
        },
      },
      outlined: ({ ownerState }) => ({
        "&:hover": {
          boxShadow: `2px 2px ${palette[ownerState.color].main}`,
        },
        "&:focus-visible": {
          boxShadow: `2px 2px ${palette[ownerState.color].main}`,
        },
        "&:active": {
          boxShadow: "none",
        },
      }),
    },
    defaultProps: {
      disableElevation: true,
    },
  };
};
