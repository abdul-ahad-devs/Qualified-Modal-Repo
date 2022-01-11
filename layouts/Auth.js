import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-pro-react/layouts/authStyle.js";
import { appRoutes } from "routes";
const useStyles = makeStyles(styles);

export default function Pages(props) {
  const { ...rest } = props;
  // ref for the wrapper div
  const wrapper = React.createRef();
  // styles
  const classes = useStyles();
  React.useEffect(() => {
    document.body.style.overflow = "unset";
    // Specify how to clean up after this effect:
    return function cleanup() {};
  });
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/auth") {
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
  return (
    <div style={{ justifyContent: "center", alignItems: "center" }}>
      <div className={classes.wrapper} ref={wrapper}>
        {/* A function would be called here it will confirm wheather
         the user is login or not and route according to that */}
        <Switch>
          {getRoutes(appRoutes())}
          <Redirect exact from="/auth" to="/auth/login" />
          <Redirect to="/auth/page-not-found" />
        </Switch>
      </div>
    </div>
  );
}
