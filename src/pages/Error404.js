import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom/dist";

/**
 * This is used to show when the PageNotFound error occurs.
 *
 * Is used for all the other navigation other than the routes specified in
 * @example ../App.js
 */
const Error404 = () => {
  const navigate = useNavigate();
  const handleGoHomeClick = () => {
    navigate("/", { replace: true });
  };
  return (
    <Box sx={{ pt: 4 }}>
      <Typography variant="h3">Page Not Found</Typography>
      <Button
        title="Go Home"
        sx={{ mt: 4 }}
        variant="outlined"
        onClick={handleGoHomeClick}
      >
        Go Home
      </Button>
    </Box>
  );
};

export default Error404;
