import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom/dist";

/**
 * This is used to restrict specific Routes to some users.
 *
 * Ex: Admin page access is given only to Admin users
 * @param {boolean} isAllowed
 * @param {NodeList} children
 */
const PageAuthorizer = ({ isAllowed, children }) => {
  const navigate = useNavigate();

  const handleGoBackOrHomeClick = () => {
    console.log(navigate);
    navigate(-1);
  };
  return (
    <React.Fragment>
      {isAllowed ? (
        <React.Fragment>{children}</React.Fragment>
      ) : (
        <Box sx={{ pt: 4 }}>
          <Typography variant="h3">
            You are not authorized to view this page
          </Typography>
          <Button
            title="Go Back"
            sx={{ mt: 4 }}
            variant="outlined"
            onClick={handleGoBackOrHomeClick}
          >
            Go Back
          </Button>
        </Box>
      )}
    </React.Fragment>
  );
};

export default PageAuthorizer;
