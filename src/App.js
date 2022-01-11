import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AuthLayout from "layouts/Auth.js";
import ProtectedRoute from "helpers/ProtectedRoutes";
import { NotificationContainer } from "components/common/ReactNotifications";
import authStore from "store/authStore";
import jwtDecode from "jwt-decode";
import { isUserAuthenticated } from "helpers/isUserAuthenticated";
import { appRoutes } from "routes";

const App = () => {
  const userToken = authStore((state) => state.userToken);

  return (
    <>
      <NotificationContainer />
      <BrowserRouter>
        <Switch>
          <Route path="/auth" render={(props) => <AuthLayout {...props} />} />

          <Redirect
            exact
            from="/"
            to={
              userToken &&
              isUserAuthenticated(userToken) &&
              userToken &&
              jwtDecode(userToken).role === "SuperAdmin"
                ? "/superAdmin"
                : userToken && jwtDecode(userToken).role === "CustomerAdmin"
                ? "/customerAdmin"
                : userToken && jwtDecode(userToken).role === "CustomerUser"
                ? "/customerUser"
                : "/auth"
            }
          />

          {/* FROM THIS PROTECTED ROUTE, OUR APPLICATION STARTS */}
          <ProtectedRoute />

          <Redirect to="/auth/page-not-found" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
