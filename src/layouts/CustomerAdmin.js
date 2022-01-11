import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import cx from "classnames";

// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import TopNavbar from "components/Navbars/TopNavbar.js";

import { appRoutes } from "routes";

import styles from "assets/jss/material-dashboard-pro-react/layouts/adminStyle.js";
import CustomerAdminMenubar from "components/Navbars/CustomerAdminMenubar";
import { getRoutes } from "helpers/routesHelpers";
import authStore from "store/authStore";
import CommonDashboard from "views/Common/Dashboard";
var ps;

const useStyles = makeStyles(styles);

export default function Dashboard(props) {
  const { ...rest } = props;
  // states and functions
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // styles
  const classes = useStyles();

  // ref for main panel div
  const mainPanel = React.createRef();
  // effect instead of componentDidMount, componentDidUpdate and componentWillUnmount
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);

    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  });

  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const mainPanelClasses =
    classes.mainPanel +
    " " +
    cx({
      [classes.mainPanelWithPerfectScrollbar]:
        navigator.platform.indexOf("Win") > -1,
    });

  const isFirstLogin = authStore((state) => state.isFirstLogin);

  return (
    <div className={classes.wrapper}>
      <div className={mainPanelClasses} ref={mainPanel}>
        <TopNavbar handleDrawerToggle={handleDrawerToggle} {...rest} />
        {/* On the /maps/full-screen-maps route we want the map to be on full screen - this is not possible if the content and container classes are present because they have some paddings which would make the map smaller */}
        <div className={classes.content}>
          <CustomerAdminMenubar />
          <div className={classes.container}>
            <Switch>
              {/* It is the requirement to restrict the logged in user not to navigate into another screen until the user completes organization profile */}
              {isFirstLogin && (
                <Route
                  from="*"
                  to="/customerAdmin/dashboard"
                  component={CommonDashboard}
                />
              )}
              {getRoutes(appRoutes())}
              {/* RESTRICTING THE USER TO CHANGE THE URL IF IT IS FIRST TIME LOGIN */}
              <Redirect
                exact
                from="/customerAdmin"
                to="/customerAdmin/dashboard"
              />
              <Redirect exact from="*" to="/auth/page-not-found" />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}
