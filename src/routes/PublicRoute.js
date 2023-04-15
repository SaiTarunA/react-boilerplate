import React from "react";
import PublicLayout from "../layouts/PublicLayout";

/**
 * This is used to allow users to access the route even if not Authenticated.
 *
 * Ex: Login, Error404 in a Platform
 * @param {NodeList} Component
 */
const PublicRoute = ({ component: Component }) => {
  return (
    <PublicLayout>
      <Component />
    </PublicLayout>
  );
};

export default PublicRoute;
