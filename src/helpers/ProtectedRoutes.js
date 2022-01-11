import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import authStore from "store/authStore";
import { isUserAuthenticated } from "helpers/isUserAuthenticated";
import { NotificationManager } from "components/common/ReactNotifications";
import jwtDecode from "jwt-decode";
import CustomerAdminLayout from "layouts/CustomerAdmin";
import SuperAdminLayout from "layouts/Admin";
import CustomerUserLayout from "layouts/CustomerStaff";

// THIS FUNCTION WILL CHECK REQUESTED APP LAYOUT AND WILL RETURN ROUTES ACCORDINGLY
const getCurrentLayout = (requestedLayout, requestedPath) => {
  if (requestedLayout === "superAdmin") {
    return (
      <Route
        path={requestedPath}
        render={(props) => <SuperAdminLayout {...props} />}
      />
    );
  } else if (requestedLayout === "customerAdmin") {
    return (
      <Route
        path={requestedPath}
        render={(props) => <CustomerAdminLayout {...props} />}
      />
    );
  } else if (requestedLayout === "customerUser") {
    return (
      <Route
        path={requestedPath}
        render={(props) => <CustomerUserLayout {...props} />}
      />
    );
  }
};

const ProtectedRoute = () => {
  const userToken = authStore((state) => state.userToken);

  let decodedToken = "";
  let loggedInRole = "";

  if (userToken) {
    decodedToken = jwtDecode(userToken);
    loggedInRole = decodedToken.role;
  }

  if (isUserAuthenticated(userToken)) {
    const requestedPath = window.location.pathname;
    const requestedLayout = requestedPath.split("/")[1];
    const isRightLayout =
      loggedInRole.toLocaleLowerCase() === requestedLayout.toLocaleLowerCase();
    if (isRightLayout) {
      return (
        <Switch>{getCurrentLayout(requestedLayout, requestedPath)}</Switch>
      );
    } else {
      return <Redirect to="/auth/page-not-found" />;
    }
  }

  NotificationManager.error("Session timeout", "Please login again", 5000);

  return <Redirect to="/auth/login" />;
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  component: PropTypes.node,
  path: PropTypes.string,
};
