import React from "react";
import { fetchUserProfile } from "../app/actions";
import { connect } from "react-redux";
import MuiComponents from "../MaterialUI/MuiTest/MuiComponents";
import { Box } from "@mui/material";

const Home = (props) => {
  return (
    <Box>
      Home Page
      <MuiComponents />
    </Box>
  );
};

const mapStateToProps = (state) => {
  const { common, homePage } = state;
  return {
    mode: common.mode,
    userProfile: homePage.userProfile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserProfile: (userId) => {
      dispatch(fetchUserProfile(userId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
