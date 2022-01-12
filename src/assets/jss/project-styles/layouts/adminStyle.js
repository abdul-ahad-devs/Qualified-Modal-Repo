import { whiteColor } from "assets/jss/material-dashboard-pro-react";
import {
  transition,
  containerFluid,
} from "assets/jss/material-dashboard-pro-react.js";

const appStyle = (theme) => ({
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh",
    "&:after": {
      display: "table",
      clear: "both",
      content: '" "',
    },
  },
  mainPanel: {
    transitionProperty: "top, bottom, width",
    transitionDuration: ".2s, .2s, .35s",
    transitionTimingFunction: "linear, linear, ease",
    [theme.breakpoints.up("md")]: {
      width: `calc(100%)`,
    },
    overflow: "auto",
    position: "relative",
    float: "right",
    ...transition,
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: "touch",
  },
  content: {
    marginTop: "65px",
    padding: "22px 0px",
    paddingBottom: "0px",
    minHeight: "calc(100vh - 123px)",
  },
  container: {
    ...containerFluid,
    backgroundColor: whiteColor,
  },
  mainPanelWithPerfectScrollbar: {
    overflow: "hidden !important",
  },
});

export default appStyle;
