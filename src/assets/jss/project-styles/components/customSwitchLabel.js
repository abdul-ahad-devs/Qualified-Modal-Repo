import {
  whiteColor,
  grayColor,
  blackColor,
  primaryColor,
  hexToRgb,
} from "assets/jss/material-dashboard-pro-react.js";

const customSwitchLabel = (theme) => ({
  managerClasses: {
    [theme.breakpoints.up("md")]: {
      display: "inline-block",
    },
  },
  switchBase: {
    color: primaryColor[0] + "!important",
  },
  switchIcon: {
    boxShadow: "0 1px 3px 1px rgba(" + hexToRgb(blackColor) + ", 0.4)",
    color: whiteColor + " !important",
    border: "1px solid rgba(" + hexToRgb(blackColor) + ", .54)",
  },
  switchIconChecked: {
    borderColor: primaryColor[0],
    transform: "translateX(0px)!important",
  },
  switchBar: {
    width: "30px",
    height: "15px",
    backgroundColor: "rgb(" + hexToRgb(grayColor[18]) + ")",
    borderRadius: "15px",
    opacity: "1.0 !important",
  },
  switchPrimary: {
    "&.Mui-checked": {
      color: "rgb(" + hexToRgb(primaryColor[0]) + ") !important",
    },
    "&.Mui-checked + .MuiSwitch-track": {
      backgroundColor: "rgb(" + hexToRgb(primaryColor[0]) + ") !important",
    },
  },
  formControl: {
    marginLeft: "10px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    zIndex: "1 !important",
    marginBottom: "10px",
  },
  noMarginPadding: {
    margin: "0px !important",
    padding: "0px !important",
  },
  inputLabel: {
    color: `${blackColor} !important`,
    fontSize: "1rem",
  },
  insideForm: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "0px !important",
    padding: "0px !important",
  },
  themeColor: {
    color: "#D65746 !important",
    fontSize: "1rem",
  },
});

export default customSwitchLabel;
