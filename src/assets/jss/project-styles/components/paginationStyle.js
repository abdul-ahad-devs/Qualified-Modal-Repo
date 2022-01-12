import {
  grayColor,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  blackColor,
  whiteColor,
  hexToRgb,
} from "assets/jss/material-dashboard-pro-react.js";

const paginationStyle = {
  justified: {
    justifyContent: "center",
    alignItems: "center",
  },
  pagination: {
    display: "inline-block",
    paddingLeft: "0",
    margin: "20px 0",
    borderRadius: "4px",
  },

  primary: {
    "&,&:hover,&:focus": {
      backgroundColor: primaryColor[0],
      borderColor: primaryColor[0],
      color: whiteColor,
      boxShadow:
        "0 4px 5px 0 rgba(" +
        hexToRgb(primaryColor[0]) +
        ", 0.14), 0 1px 10px 0 rgba(" +
        hexToRgb(primaryColor[0]) +
        ", 0.12), 0 2px 4px -1px rgba(" +
        hexToRgb(primaryColor[0]) +
        ", 0.2)",
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default",
    },
  },

  disabled: {
    "&,&:hover,&:focus": {
      color: grayColor[1],
      cursor: "not-allowed",
      backgroundColor: whiteColor,
      borderColor: grayColor[5],
    },
  },
  paginationButton: {
    margin: "0px 5px",
  },
  selected: {
    border: `1px solid ${primaryColor[0]} !important`,
    borderRadius: "50px",
    backgroundColor: "black !important",
  },
};

export default paginationStyle;
