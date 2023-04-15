import React from "react";
import LogoMaker from "./LogoMaker";
import { Box, Divider, useMediaQuery } from "@mui/material";

/**
 * This is the official logo component used in this webapp
 *
 * logoText and subLogoText props can be changed from
 * @example ../../config.js
 * @param {string} logoText Ex: "SAI TARUN"
 * @param {string} subLogoText Ex: "blogs"
 */
const Logo = (props) => {
  const { logoText, subLogoText } = props;
  const mobileScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const displayText = mobileScreen
    ? logoText
        .split(" ")
        .map((word) => word[0])
        .join("")
    : logoText;

  return (
    <Box display="flex" alignItems="center" columnGap={mobileScreen ? 1 : 2}>
      <LogoMaker displayText={displayText} title={logoText} />
      <Divider
        orientation="vertical"
        sx={{
          borderColor: ({ palette }) => palette.text.primary,
        }}
        flexItem
      />
      <LogoMaker title={subLogoText} variant={"h5"} fontWeight={500} />
    </Box>
  );
};

export default Logo;
