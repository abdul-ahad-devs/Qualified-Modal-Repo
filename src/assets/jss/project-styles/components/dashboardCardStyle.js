import { whiteColor } from "assets/jss/material-dashboard-pro-react";
import {
  primaryColor,
  hexToRgb,
  blackColor,
  grayColor,
} from "assets/jss/material-dashboard-pro-react";

const dashboardCardStyle = {
  root: {
    padding: "10px 5px 0 5px",
    boxShadow:
      "0 14px 26px -12px rgba(" +
      hexToRgb(grayColor[0]) +
      ", 0.42), 0 4px 23px 0px rgba(" +
      hexToRgb(blackColor) +
      ", 0.12), 0 8px 10px -5px rgba(" +
      hexToRgb(grayColor[0]) +
      ", 0.2)",
  },
  header: {
    fontWeight: "600",
    fontSize: "1.1rem",
  },
  iconStyle: {
    color: primaryColor[0],
    backgroundColor: grayColor[5],
    padding: "10px",
    borderRadius: "50px",
    margin: "0px 5px",
  },
  iconImgStyle: {
    color: primaryColor[0],
    backgroundColor: grayColor[5],
    padding: "10px",
    borderRadius: "50px",
    margin: "0px 5px",
    height: "35px",
  },
  text: {
    margin: "0px",
    marginTop: "5px",
    fontWeight: "500",
    fontSize: "1rem",
    alignSelf: "left",
  },
  count: {
    textAlign: "center",
    margin: "2px",
    fontWeight: "500",
    color: primaryColor[0],
  },
  row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    margin: "0px",
  },
  iconsButtons: {
    marginRight: "10px",
  },
  footerButton: {
    position: "absolute",
    marginTop: "20px",
  },
  footer: {
    justifyContent: "center",
  },
  tag: {
    backgroundColor: whiteColor,
    color: primaryColor[0],
    fontSize: "0.9rem",
    fontWeight: "450 !important",
    padding: "4px 20px",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
  },
  tagIcon: {
    fontSize: "1rem",
    marginRight: "5px",
  },
};

export default dashboardCardStyle;
