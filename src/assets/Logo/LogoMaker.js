import { Box, Typography } from "@mui/material";
import React from "react";
import { LogoLink } from "./styles";
import { NavLink } from "react-router-dom";

/**
 * This is used if you don't want to use official logo and want only one text with no subtext
 *
 * Ex: Only "blogs" or only "SAI TARUN"
 * @param {string} displayText Ex: "SAI TARUN" for >900px and "ST" for <900px
 * @param {string} title Ex: "blogs"
 */
const LogoMaker = (props) => {
  const {
    displayText,
    title,
    variant,
    fontFamily,
    fontWeight,
    ...otherTextProps
  } = props;
  return (
    <Box display="flex">
      <Typography
        title={title}
        variant={variant || "h4"}
        fontFamily={fontFamily || `'Barlow Condensed', sans-serif`}
        fontWeight={fontWeight || 700}
        {...otherTextProps}
      >
        <LogoLink component={NavLink} to="/">
          {displayText || title}
        </LogoLink>
      </Typography>
    </Box>
  );
};

export default LogoMaker;
