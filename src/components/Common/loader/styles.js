import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { withTheme } from "@mui/styles";

export const LoaderText = styled(withTheme(Typography), {
  shouldForwardProp: (prop) => prop !== "styleProps",
})((props) => ({
  fontFamily: `'Red Rose', cursive`,
  position: "relative",
  "::after": {
    content: '"|"',
    textAlign: "left",
    position: "absolute",
    right: 0,
    width: "100%",
    background: props.theme.palette.background.default,
    animation: `typing ${props.styleProps.animationTime}s infinite steps(${props.styleProps.textLength}) forwards, caret ${props.styleProps.caretBlinkTime}s infinite`,
  },
}));

export const LoaderBackground = styled(withTheme(Box))((props) => ({
  zIndex: 1600,
  height: "100vh",
  width: "100%",
  background: props.theme.palette.background.default,
  position: "fixed",
  top: 0,
  left: 0,
}));
