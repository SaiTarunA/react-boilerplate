import { Box } from "@mui/material";
import React from "react";
import Logo from "../../../assets/Logo";
import { CONFIG } from "../../../config";

const LogoContainer = () => {
  const texts = CONFIG.NavigationBar.Logo;
  return (
    <Box sx={{ p: 2 }}>
      <Logo logoText={texts.LogoName} subLogoText={texts.SubLogoName} />
    </Box>
  );
};

export default LogoContainer;
