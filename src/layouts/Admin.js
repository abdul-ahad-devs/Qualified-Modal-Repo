import React from "react";
import { Switch, Redirect } from "react-router-dom";
import cx from "classnames";

// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import TopNavbar from "components/Navbars/TopNavbar.js";

import { appRoutes } from "routes/index";

import styles from "assets/jss/material-dashboard-pro-react/layouts/adminStyle.js";
import SuperAdminMenubar from "components/Navbars/SuperAdminMenubar";
import { getRoutes } from "helpers/routesHelpers";

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

  return (
    <div className={classes.wrapper}>
      <div className={mainPanelClasses} ref={mainPanel}>
        <TopNavbar handleDrawerToggle={handleDrawerToggle} {...rest} />
        {/* On the /maps/full-screen-maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
        <div className={classes.content}>
          <SuperAdminMenubar />
          <div className={classes.container}>
            <Switch>
              {getRoutes(appRoutes())}
              <Redirect exact from="/superAdmin" to="/superAdmin/dashboard" />
              <Redirect to="/auth/page-not-found" />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}
