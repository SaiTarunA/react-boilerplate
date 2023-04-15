import React from "react";
import PrivateLayout from "../layouts/PrivateLayout";
import { Navigate } from "react-router-dom/dist";

/**
 * This is used to allow users to access the route only when authenticated.
 *
 * Ex: Home Page in a Platform
 * @param {NodeList} Component
 */
const PrivateRoute = ({ component: Component }) => {
  const isAuthenticated = true;
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <PrivateLayout>
      <Component />
    </PrivateLayout>
  );
};

export default PrivateRoute;
