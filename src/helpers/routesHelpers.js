import { Route } from "react-router-dom";
import React from "react";
import { superAdminMenu } from "constants/superAdminMenu";
import { customerAdminMenu } from "constants/customerAdminMenu";
import { appRoutes } from "routes";

import jwtDecode from "jwt-decode";
import { customerUserMenu } from "constants/customerUserMenu";

export const getActiveRoute = (routes) => {
  let activeRoute;
  for (let i = 0; i < routes.length; i++) {
    if (routes[i].collapse) {
      let collapseActiveRoute = getActiveRoute(routes[i].views);
      if (collapseActiveRoute !== activeRoute) {
        return collapseActiveRoute;
      }
    } else {
      if (
        window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
      ) {
        return routes[i].path;
      }
    }
  }
  return activeRoute;
};

export const getRoutes = (routes) => {
  return routes.map((prop, key) => {
    if (
      prop.layout === "/superAdmin" ||
      prop.layout === "/customerAdmin" ||
      prop.layout === "/customerUser" ||
      prop.layout === "/auth"
    ) {
      return (
        <Route
          exact
          path={prop.layout + prop.path}
          component={prop.component}
          key={key}
        />
      );
    } else {
      return null;
    }
  });
};

export const getActiveTabIndex = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const decodedToken = jwtDecode(token);
    const loggedinRole = decodedToken.role;
    const routes = appRoutes();
    if (loggedinRole === "SuperAdmin") {
      const value = superAdminMenu.find(
        (obj) => obj.tabRoute === getActiveRoute(routes)
      );
      return superAdminMenu.indexOf(value);
    } else if (loggedinRole === "CustomerAdmin") {
      const value = customerAdminMenu.find(
        (obj) => obj.tabRoute === getActiveRoute(routes)
      );
      return customerAdminMenu.indexOf(value);
    } else if (loggedinRole === "CustomerUser") {
      const value = customerUserMenu.find(
        (obj) => obj.tabRoute === getActiveRoute(routes)
      );
      return customerUserMenu.indexOf(value);
    }
  }
};
