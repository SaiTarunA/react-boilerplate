import { Box } from "@mui/material";
import React from "react";
import Buttons from "./Buttons";
import TypographyMui from "./TypographyMui";

/**
 * This is used to Test the Mui Components look after creating theme. You can add more in this.
 *
 * Add this to any page in local and check.
 * @see See [Mui](https://mui.com/)
 */
const MuiComponents = () => {
  return (
    <Box>
      <Buttons />
      <TypographyMui />
    </Box>
  );
};

export default MuiComponents;
