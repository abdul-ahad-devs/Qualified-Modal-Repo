import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = {
  grid: {
    // margin: "0 -15px",
    width: "calc(100%)",
    // '&:before,&:after':{
    //   display: 'table',
    //   content: '" "',
    // },
    // '&:after':{
    //   clear: 'both',
    // }
  },
  no_theme_default_setting: {
    padding: "0px !important",
  },
};

const useStyles = makeStyles(styles);

export default function GridContainer(props) {
  const classes = useStyles();
  const { children, className, noDefaultSetting, ...rest } = props;
  return (
    <Grid
      container
      {...rest}
      className={
        noDefaultSetting
          ? classes.no_theme_default_setting + " " + className
          : classes.grid + " " + className
      }
    >
      {children}
    </Grid>
  );
}

GridContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  noDefaultSetting: PropTypes.bool,
};
