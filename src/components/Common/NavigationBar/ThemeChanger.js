import React from "react";
import { default as DarkModeIcon } from "@mui/icons-material/Brightness4";
import { default as LightModeIcon } from "@mui/icons-material/Brightness7";
import { Box, IconButton } from "@mui/material";

const ThemeChanger = (props) => {
  const { mode, changeThemeMode } = props;
  return (
    <Box>
      <IconButton
        onClick={() => changeThemeMode("toggle", null)}
        title={`${mode === "light" ? "Dark" : "Light"} Mode`}
      >
        {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </Box>
  );
};

export default ThemeChanger;
