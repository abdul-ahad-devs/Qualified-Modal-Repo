import {
  primaryColor,
  blackColor,
} from "assets/jss/material-dashboard-pro-react.js";

const checkboxesStyle = {
  formControl: {
    margin: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: "75px",
  },
  checkbox: {
    color: `${primaryColor[0]} !important`,
    padding: "0px 5px 0px 0px",
  },
  label: {
    color: `${blackColor} !important`,
    fontSize: "1rem",
    fontWeight: "300",
  },
};

export default checkboxesStyle;
