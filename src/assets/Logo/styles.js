import styled from "@emotion/styled";
import { Link } from "@mui/material";
import { withTheme } from "@mui/styles";

export const LogoLink = styled(withTheme(Link))((props) => ({
  color: "inherit",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "none",
  },
}));
