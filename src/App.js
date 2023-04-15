import React, { useEffect } from "react";
import "./styles/App.css";
import { ThemeProvider, useMediaQuery } from "@mui/material";
import { theme } from "./MaterialUI/MuiTheme";
import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes } from "react-router-dom";
import { changeThemeMode } from "./app/actions";
import { connect } from "react-redux";
import PublicRoute from "./routes/PublicRoute";

import Home from "./pages/Home";
import PrivateRoute from "./routes/PrivateRoute";
import Error404 from "./pages/Error404";

const App = (props) => {
  const { mode, changeThemeMode } = props;

  // Set mode() based on
  // 1. Whether userPrefersDarkMode
  // 2. And then Change if user toggles the mode
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  useEffect(() => {
    if (prefersDarkMode) {
      changeThemeMode("change", "dark");
    }
  }, [prefersDarkMode]);

  const newTheme = theme(mode);

  return (
    <ThemeProvider theme={newTheme}>
      <CssBaseline />
      <Routes>
        {/* PUBLIC Routes */}
        <Route exact path="/" element={<PublicRoute component={Home} />} />

        {/* PRIVATE Routes */}
        {/* <Route exact path="/abcd" element={<PrivateRoute component={Home} />} /> */}

        {/* Note: All Routes to be added above this */}
        <Route path="*" element={<PublicRoute component={Error404} />} />
      </Routes>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  const { common, homePage } = state;
  return {
    mode: common.mode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeThemeMode: (type, mode) => {
      dispatch(changeThemeMode(type, mode));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
